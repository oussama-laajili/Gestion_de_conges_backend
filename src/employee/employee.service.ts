// src/employees/employees.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee, EmployeeDocument } from '../schema/employee';
import { CreateEmployeeDto } from './dto/CreateEmployeeDto ';

@Injectable()
export class EmployeesService {
  constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const employee = new this.employeeModel(createEmployeeDto);
    return employee.save();
  }
  async deleteByEmail(email: string): Promise<void> {
    await this.employeeModel.deleteOne({ email }).exec();
  }
  async getUserByEmail(email: string): Promise<Partial<Employee>> {
    const user = await this.employeeModel.findOne({ email }).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user.toObject();
  }
}