// src/users/user.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { User, UserSchema } from 'src/schema/User.schema';
import { Employee, EmployeeSchema } from 'src/schema/employee';
import { Administrateur, AdministrateurSchema } from 'src/schema/administrateur';
import { Manager, ManagerSchema } from 'src/schema/manager';
import { EmployeesService } from 'src/employee/employee.service';
import { AdministrateurService } from 'src/administrateur/administrateur.service';
import { ManagerService } from 'src/manager/manager.service';
import { EmployeesController } from 'src/employee/EmployeeController ';
import { AdministrateurController } from 'src/administrateur/administrateur.controller';
import { ManagerController } from 'src/manager/manager.controller';
import { Conge, CongeSchema } from 'src/schema/conge';
import { MailModule } from '../mail/mail.module';


@Module({
  imports: [
    
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Employee.name, schema: EmployeeSchema },
      { name: Administrateur.name, schema: AdministrateurSchema },
      { name: Manager.name, schema: ManagerSchema },
      { name: Conge.name, schema: CongeSchema },
    ]),
    MailModule
  ],
  controllers: [UserController, EmployeesController, AdministrateurController, ManagerController],
  providers: [UserService, EmployeesService, AdministrateurService, ManagerService],
  exports: [UserService],
})
export class UserModule {}
