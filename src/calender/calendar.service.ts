// src/calendar/calendar.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCalendarDto } from './dto/CreateCalenderDto';
import { Calendar, CalendarDocument } from '../schema/calender';

@Injectable()
export class CalendarService {
  constructor(
    @InjectModel(Calendar.name) private calendarModel: Model<CalendarDocument>,
  ) {}

  async create(createCalendarDto: CreateCalendarDto): Promise<Calendar> {
    const createdCalendar = new this.calendarModel(createCalendarDto);
    return createdCalendar.save();
  }

  async findAll(): Promise<Calendar[]> {
    return this.calendarModel.find().exec();
  }

  async findOne(id: string): Promise<Calendar> {
    return this.calendarModel.findById(id).exec();
  }
}
