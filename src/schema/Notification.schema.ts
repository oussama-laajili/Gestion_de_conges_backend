import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema()
export class Notification {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  title: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
