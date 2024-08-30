// src/calendar/calendar.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CalendarService } from './calendar.service';
import { CreateCalendarDto } from './dto/CreateCalenderDto';

@Controller('calendar')
export class CalendarController {
    constructor(private readonly calendarService: CalendarService) {}

    @Post()
    async create(@Body() createCalendarDto: CreateCalendarDto) {
        return this.calendarService.create(createCalendarDto);
    }

    @Get()
    async findAll() {
        return this.calendarService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.calendarService.findOne(id);
    }
}
