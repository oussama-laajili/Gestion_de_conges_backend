import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../schema/User.schema';
import { CreateUserDto } from './dto/CreateUser.dto';
import { generatePassword } from './util';
import { MailService } from '../mail/mail.service';
import * as bcrypt from 'bcrypt';
import { cloudinary } from 'src/cloudinary/cloudinary.config';
import * as util from 'util';
import * as fs from 'fs';
import * as streamifier from 'streamifier';
import * as crypto from 'crypto';

const unlinkFile = util.promisify(fs.unlink);
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly mailService: MailService, // Inject MailService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userModel.findOne({ email: createUserDto.email }).exec();
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const password = generatePassword(8);
    console.log('Generated password:', password);
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed password:', hashedPassword);

    const createdUser = new this.userModel({ ...createUserDto, password: hashedPassword });
    await createdUser.save();
    console.log('User saved:', createdUser);

    // Send the email with the generated password
    await this.mailService.sendUserPassword(createUserDto.email, password);

    return createdUser;
  }

  async validateUser(email: string, password: string): Promise<{ status: string; jobtitle: string }> {
    console.log('Validating user:', email);
    const user = await this.userModel.findOne({ email }).exec();

    if (!user) {
      console.log('User not found');
      return { status: 'email_not_found', jobtitle: '' };
    }

    console.log('Stored password hash:', user.password);
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log('Invalid password');
      return { status: 'invalid_password', jobtitle: '' };
    }

    console.log('Password is valid');
    const jobtitle = user.jobtitle || '';
    return { status: 'ok', jobtitle };
  }

  async countByStatus(status: string): Promise<number> {
    return this.userModel.countDocuments({ status }).exec();
  }

  async countByGender(gender: string): Promise<number> {
    return this.userModel.countDocuments({ gender }).exec();
  }
  async countByDegreeType(typeofdegree: string): Promise<number> {
    return this.userModel.countDocuments({ typeofdegree }).exec();
  }
  private getCurrentDate(): Date {
    return new Date();
  }

  private getDateYearsAgo(years: number): Date {
    const date = this.getCurrentDate();
    date.setFullYear(date.getFullYear() - years);
    return date;
  }

  async countUsersByAgeRange(minAge: number, maxAge?: number): Promise<number> {
    const currentDate = this.getCurrentDate();
    const minDate = this.getDateYearsAgo(maxAge ?? minAge);
    const maxDate = this.getDateYearsAgo(minAge);

    if (maxAge) {
      return this.userModel.countDocuments({
        dob: { $gte: minDate, $lt: maxDate },
      }).exec();
    } else {
      return this.userModel.countDocuments({
        dob: { $lt: minDate },
      }).exec();
    }
  }

 

  async countTotalUsers(): Promise<number> {
    return this.userModel.countDocuments().exec();
  }

  async getAllUsers(): Promise<Partial<User>[]> {
    return this.userModel.find({}, 'fullname jobtitle phone email avatar dob gender cin adresse street state city postalcode country typeofdegree speciality dateofdegree departement linemanager startdate enddate status degree').exec();
  }

  async searchUsersByName(name: string): Promise<Partial<User>[]> {
    return this.userModel.find(
      { fullname: new RegExp(name, 'i') },
      'fullname jobtitle phone email',
    ).exec();
  }

  async searchUsersByDepartment(department: string): Promise<Partial<User>[]> {
    return this.userModel.find(
      { departement: new RegExp(department, 'i') },
      'fullname jobtitle phone email',
    ).exec();
  }

  async getUsersByPostalCodeAndDepartment(): Promise<any> {
    const totalUsersByDept = await this.userModel.aggregate([
      {
        $group: {
          _id: '$departement',
          total: { $sum: 1 },
        },
      },
    ]);

    const usersWithPostalCode1ByDept = await this.userModel.aggregate([
      {
        $match: { postalcode: 1 },
      },
      {
        $group: {
          _id: '$departement',
          count: { $sum: 1 },
        },
      },
    ]);

    return { totalUsersByDept, usersWithPostalCode1ByDept };
  }

  async findByEmail(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }
  async deleteUserByEmail(email: string): Promise<void> {
    const result = await this.userModel.findOneAndDelete({ email }).exec();
    if (!result) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
  }

  async getUserByEmail(email: string): Promise<Partial<User>> {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user.toObject();
  }
  async updateUserByEmail(email: string, updatedUser: Partial<User>): Promise<User> {
    const user = await this.userModel.findOneAndUpdate({ email }, updatedUser, { new: true });
    return user;
  }
  async uploadToCloudinary(file: Express.Multer.File): Promise<string> {
    try {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
          if (error) {
            console.error('Error uploading to Cloudinary:', error);
            reject(new BadRequestException('Failed to upload to Cloudinary'));
          } else {
            resolve(result.secure_url);
          }
        });
        streamifier.createReadStream(file.buffer).pipe(uploadStream);
      });
    } catch (error) {
      console.error('Error uploading to Cloudinary:', error);
      throw new BadRequestException('Failed to upload to Cloudinary');
    }
  }
  async countUsersByDegreeTypeAndDepartment(typeofdegree: string, departement: string): Promise<number> {
    const count = await this.userModel.countDocuments({ typeofdegree: typeofdegree, departement: departement }).exec();
    return count;
  }
  async findTeamLeaders(): Promise<User[]> {
    return this.userModel.find({ jobtitle: 'Team Leader' }).exec();
  }
  async getUsersByLineManager(linemanager: string): Promise<User[]> {
    return this.userModel.find({ linemanager }).exec();
  }
  async requestPasswordReset(email: string): Promise<void> {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Generate a reset token and expiration date
    const resetToken = crypto.randomBytes(4).toString('hex');
    user.resetToken = resetToken;
    user.resetTokenExpiration = new Date(Date.now() + 3600000); // Token valid for 1 hour
    await user.save();

    // Send reset token to user
    await this.mailService.sendUserPassword(email, resetToken);
  }

  async resetPassword(resetToken: string, newPassword: string): Promise<void> {
    const user = await this.userModel.findOne({
      resetToken,
      resetTokenExpiration: { $gte: Date.now() },
    }).exec();

    if (!user) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    user.password = await bcrypt.hash(newPassword, 10);
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();
  }
}

