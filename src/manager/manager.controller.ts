// src/users/controllers/manager.controller.ts
import { Controller, Get, Post, Body, Query, NotFoundException } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { CreateManagerDto } from './dto/CreateManagerDto ';

@Controller('managers')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}

  @Post()
  async create(@Body() createManagerDto: CreateManagerDto) {
    return this.managerService.create(createManagerDto);
  }
  @Get()
  async getAllEmployees() { // Handle GET requests at /employees
    return this.managerService.getAllManagers();
  }
  // Add other manager-specific endpoints here
}
