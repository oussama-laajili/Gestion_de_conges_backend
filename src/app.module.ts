// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/users.module';
import { CongeModule } from './conge/conge.module';
import { EmployeeModule } from './employee/employee.module';
import { ManagerModule } from './manager/manager.module';
import { AdministrateurModule } from './administrateur/administrateur.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
import { NotificationModule } from './notification/notification.module';
import { CalendarModule } from './calender/calendar.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UserModule,
    CongeModule,
    EmployeeModule, 
    ManagerModule,
    AdministrateurModule,
    AuthModule,
    MailModule,
    NotificationModule,
    CalendarModule,
  ],
})
export class AppModule {}
