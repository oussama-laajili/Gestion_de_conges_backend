import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { NotificationService } from './Notification.service';
import { CreateNotificationDto } from './dto/CreateNotificationDto';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.create(createNotificationDto);
  }

  @Get()
  async findAll() {
    return this.notificationService.findAll();
  }
  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return this.notificationService.getUsersByEmail(email);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.notificationService.delete(id);
  }
}
