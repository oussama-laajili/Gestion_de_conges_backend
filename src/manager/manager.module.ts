// src/users/employee.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ManagerController } from './manager.controller';
import { ManagerService } from './manager.service';
import { Manager } from '../schema/manager';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Manager', schema: Manager }])
  ],
  controllers: [ManagerController],
  providers: [ManagerService],
})
export class ManagerModule {}
