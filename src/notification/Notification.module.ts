import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Notification, NotificationSchema } from '../schema/Notification.schema';
import { NotificationService } from './Notification.service';
import { NotificationController } from './Notification.controller';

@Module({
    imports: [
      MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema }]),
    ],
    controllers: [NotificationController],
    providers: [NotificationService],
  })
  export class NotificationModule {}