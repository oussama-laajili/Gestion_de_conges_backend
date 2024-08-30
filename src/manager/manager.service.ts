// src/users/services/manager.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Manager } from 'src/schema/manager';
import { CreateManagerDto } from './dto/CreateManagerDto ';

@Injectable()
export class ManagerService {
  constructor(@InjectModel('Manager') private readonly managerModel: Model<Manager>) {}

  async create(createManagerDto: CreateManagerDto): Promise<Manager> {
    const createdManager = new this.managerModel(createManagerDto);
    return createdManager.save();
  }
  async getAllManagers(): Promise<Manager[]> {
    return this.managerModel.find().exec();
  }
  // Add other manager-specific methods here
}
