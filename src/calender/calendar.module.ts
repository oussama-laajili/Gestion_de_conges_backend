// src/calendar/calendar.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CalendarController } from './calendar.controller';
import { CalendarService } from './calendar.service';
import { Calendar, CalendarSchema } from '../schema/calender';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Calendar.name, schema: CalendarSchema }]),
  ],
  controllers: [CalendarController],
  providers: [CalendarService],
})
export class CalendarModule {}
