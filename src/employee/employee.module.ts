// src/users/employee.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesController } from './EmployeeController ';
import { EmployeesService } from './employee.service';
import { Employee } from '../schema/employee';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Employee', schema: Employee }])
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeeModule {}
