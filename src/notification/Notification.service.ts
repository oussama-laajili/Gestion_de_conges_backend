import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification, NotificationDocument } from '../schema/Notification.schema';
import { CreateNotificationDto } from './dto/CreateNotificationDto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name) private notificationModel: Model<NotificationDocument>,
  ) {}

  async create(createNotificationDto: CreateNotificationDto): Promise<Notification> {
    const createdNotification = new this.notificationModel(createNotificationDto);
    return createdNotification.save();
  }

  async findAll(): Promise<Notification[]> {
    return this.notificationModel.find().exec();
  }
  async delete(id: string): Promise<void> {
    const result = await this.notificationModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }
  }
  async getUsersByEmail(email: string): Promise<Partial<Notification>[]> {
    const users = await this.notificationModel.find({ email }).exec();
    if (!users || users.length === 0) {
      throw new NotFoundException('Users not found');
    }
    return users.map(user => user.toObject());
  }
}
