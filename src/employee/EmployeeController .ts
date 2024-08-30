// src/employees/employees.controller.ts
import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { EmployeesService } from './employee.service';
import { CreateEmployeeDto } from './dto/CreateEmployeeDto ';
import { Employee } from '../schema/employee';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    return this.employeesService.create(createEmployeeDto);
  }
  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return this.employeesService.getUserByEmail(email);
  }
  @Delete('email/:email')
  async deleteByEmail(@Param('email') email: string): Promise<void> {
    await this.employeesService.deleteByEmail(email);
    
  }
}
