import {
  Controller,
  Post,
  Body,
  Get,
  UseInterceptors,
  UploadedFile,
  Query,
  BadRequestException,
  UploadedFiles,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path, { extname } from 'path';
import { User } from 'src/schema/User.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'avatar', maxCount: 1 },
      { name: 'id2', maxCount: 1 },
      { name: 'degree', maxCount: 1 },
    ]),
  )
  async create(
    @Body() createUserDto: CreateUserDto,
    @UploadedFiles() files: { avatar?: Express.Multer.File[], id2?: Express.Multer.File[], degree?: Express.Multer.File[] },
  ) {
    try {
      if (files.avatar) {
        console.log('Avatar file:', files.avatar[0]); // Log file details
        createUserDto.avatar = await this.userService.uploadToCloudinary(files.avatar[0]);
      }
      if (files.id2) {
        console.log('ID2 file:', files.id2[0]); // Log file details
        createUserDto.id2 = await this.userService.uploadToCloudinary(files.id2[0]);
      }
      if (files.degree) {
        console.log('Degree file:', files.degree[0]); // Log file details
        createUserDto.degree = await this.userService.uploadToCloudinary(files.degree[0]);
      }
      return this.userService.create(createUserDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  
  @Get('count-by-state')
  async countByStatus() {
    const permanentCount = await this.userService.countByStatus('Permanent');
    const contractCount = await this.userService.countByStatus('Contract');
    const freelanceCount = await this.userService.countByStatus('Freelance');
    const internCount = await this.userService.countByStatus('Intern');

    return {
      Permanent: permanentCount,
      Contract: contractCount,
      Freelance: freelanceCount,
      Intern: internCount,
    };
  }

  @Get('gender-count')
  async getGenderCount() {
    const maleCount = await this.userService.countByGender('Male');
    const femaleCount = await this.userService.countByGender('Female');

    return {
      labels: ['Male', 'Female'],
      data: [maleCount, femaleCount],
    };
  }
  @Get('degree-count')
  async getDegreeCount() {
    const licencedegree = await this.userService.countByDegreeType('Licence Degree');
    const engineeringDegreeCount = await this.userService.countByDegreeType('Engineering Degree');
    const masterDegreeCount = await this.userService.countByDegreeType('Master Degree');

    return {
      labels: ['Licence Degree', 'Engineering Degree', 'Master Degree'],
      data: [licencedegree, engineeringDegreeCount, masterDegreeCount],
    };
  }
  @Get('age-count')
  async getAgeCount() {
    const age20to35 = await this.userService.countUsersByAgeRange(20, 35);
    const age35to50 = await this.userService.countUsersByAgeRange(35, 50);
    const ageAbove50 = await this.userService.countUsersByAgeRange(50);

    return {
      labels: ['20-35', '35-50', 'Above 50'],
      data: [age20to35, age35to50, ageAbove50],
    };
  }

  @Get('degree-count-by-department')
  async getDegreeCountByDepartment() {
    const departments = ['Marketing', 'IT', 'Sales', 'Data Science'];
    const degreeCountsByDepartment = [];

    for (const department of departments) {
      const licencedegree = await this.userService.countUsersByDegreeTypeAndDepartment('Licence Degree', department);
      const engineeringDegreeCount = await this.userService.countUsersByDegreeTypeAndDepartment('Engineering Degree', department);
      const masterDegreeCount = await this.userService.countUsersByDegreeTypeAndDepartment('Master Degree', department);

      degreeCountsByDepartment.push({
        department,
        data: [licencedegree, engineeringDegreeCount, masterDegreeCount],
      });
    }

    return degreeCountsByDepartment;
  }
  @Get()
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Delete('email/:email') 
  async deleteUserByEmail(@Param('email') email: string): Promise<void> {
    await this.userService.deleteUserByEmail(email);
  }
  @Get('search')
  async searchUsers(
    @Query('name') name?: string,
    @Query('department') department?: string,
  ) {
    if (name) {
      return this.userService.searchUsersByName(name);
    } else if (department) {
      return this.userService.searchUsersByDepartment(department);
    } else {
      throw new BadRequestException('A query parameter (name or department) must be provided');
    }
  }

  @Get('postalcode-percentage')
  async getPostalCodePercentageByDepartment() {
    const { totalUsersByDept, usersWithPostalCode1ByDept } =
      await this.userService.getUsersByPostalCodeAndDepartment();

    const percentages = totalUsersByDept.map((dept) => {
      const postalCodeDept = usersWithPostalCode1ByDept.find(
        (d) => d._id === dept._id,
      ) || { count: 0 };
      const percentage = (postalCodeDept.count / dept.total) * 100;
      return {
        department: dept._id,
        percentage: percentage.toFixed(2) + '%',
      };
    });

    return percentages;
  }

  @Get('validate')
  async validateUser(
    @Query('email') email: string,
    @Query('password') password: string,
  ) {
    if (!email || !password) {
      throw new BadRequestException('Email and password must be provided');
    }
    return this.userService.validateUser(email, password);
  }
  @Get('team-leaders')
  async getTeamLeaders(): Promise<User[]> {
    return this.userService.findTeamLeaders();
  }
  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email);
  }
  @Get('linemanager/:linemanager')
  async getUsersByLineManager(@Param('linemanager') linemanager: string): Promise<User[]> {
    return this.userService.getUsersByLineManager(linemanager);
  }
  @Put(':email')
  async updateUser(@Param('email') email: string, @Body() updatedUser: Partial<User>): Promise<User> {
    const user = await this.userService.updateUserByEmail(email, updatedUser);
    return user;
  }
  


}
