// src/conge/conge.service.ts
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Conge } from '../schema/conge';
import { CreateCongeDto } from './dto/CreateCongeDto ';
import { cloudinary } from 'src/cloudinary/cloudinary.config';
import * as streamifier from 'streamifier';


@Injectable()
export class CongeService {
  constructor(@InjectModel(Conge.name) private readonly congeModel: Model<Conge>) {}

  async createConge(createCongeDto: CreateCongeDto): Promise<Conge> {
    const createdConge = new this.congeModel(createCongeDto);
    return createdConge.save();
  }

  async getCongesByEmail(email: string): Promise<Conge[]> {
    return this.congeModel.find({ email }).exec();
  }

  async getUsersByEmail(email: string): Promise<Partial<Conge>[]> {
    const users = await this.congeModel.find({ email }).exec();
    if (!users || users.length === 0) {
      throw new NotFoundException('Users not found');
    }
    return users.map(user => user.toObject());
  }
  

  async getPendingConges(): Promise<Conge[]> {
    return this.congeModel.find({ statut: 'en attente' }).exec();
  }
   async getAllAppointments(): Promise<Conge[]> {
    return this.congeModel.find().exec();
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
  async updateCongeStatus(id: string, status: string): Promise<Conge> {
    const conge = await this.congeModel.findById(id);
    if (!conge) {
      throw new NotFoundException(`Conge with ID ${id} not found`);
    }
    conge.statut = status;
    return conge.save();
  }
  
  async countCongesByType(): Promise<{ labels: string[], data: number[] }> {
    const congesPayesCount = await this.congeModel.countDocuments({ type: 'Congés payés' }).exec();
    const congesSansSoldeCount = await this.congeModel.countDocuments({ type: 'Congés sans solde' }).exec();
    const otherCongesCount = await this.congeModel.countDocuments({ type: { $nin: ['Congés payés', 'Congés sans solde'] } }).exec();

    const labels = ['Congés payés', 'Congés sans solde', 'Others'];
    const data = [congesPayesCount, congesSansSoldeCount, otherCongesCount];

    return { labels, data };
  }
  async countSpecialTypes(): Promise<{ [key: string]: number }> {
    const types = [
      'Congés spéciaux pour raison de famille',
      'Congés de Maternité',
      'Congés exceptionnels',
      'Congés de maladie',
      'Congés pour obligations militaires',
      'Congés sans solde',
      'Congés payés'
    ];

    const counts = await this.congeModel.aggregate([
      { $match: { type: { $in: types } } },
      { $group: { _id: '$type', count: { $sum: 1 } } },
    ]);

    const result: { [key: string]: number } = {};
    for (const type of types) {
      const countObj = counts.find(count => count._id === type);
      result[type] = countObj ? countObj.count : 0;
    }

    return result;
  }
  async countCongesByStatus(): Promise<{ labels: string[], data: number[] }> {
    const acceptedCount = await this.congeModel.countDocuments({ statut: 'accepte' }).exec();
    const refusedCount = await this.congeModel.countDocuments({ statut: 'refuse' }).exec();
    const pendingCount = await this.congeModel.countDocuments({ statut: 'en attente' }).exec();

    return {
      labels: ['Accepte', 'Refuse', 'En attente'],
      data: [acceptedCount, refusedCount, pendingCount],
    };
  }
  // user.service.ts

    async countCongesByTypeAndStatus(type: string, statut: string): Promise<number> {
      return this.congeModel.countDocuments({ type: type, statut }).exec();
    }
}

