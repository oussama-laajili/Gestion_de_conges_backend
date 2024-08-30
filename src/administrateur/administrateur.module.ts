// src/users/employee.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdministrateurController } from './administrateur.controller';
import { AdministrateurService } from './administrateur.service';
import { Administrateur } from '../schema/administrateur';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Administrateur', schema: Administrateur }])
  ],
  controllers: [AdministrateurController],
  providers: [AdministrateurService],
})
export class AdministrateurModule {}
