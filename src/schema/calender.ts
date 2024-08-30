// src/schema/calendar.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Calendar {
  @Prop()
  title: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  recurrence: string;
}

export type CalendarDocument = Calendar & Document;
export const CalendarSchema = SchemaFactory.createForClass(Calendar);
