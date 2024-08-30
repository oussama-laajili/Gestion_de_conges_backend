// src/conge/conge.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CongeController } from './conge.controller';
import { CongeService } from './conge.service';
import { Conge, CongeSchema } from '../schema/conge';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Conge.name, schema: CongeSchema }]),
  ],
  controllers: [CongeController],
  providers: [CongeService],
})
export class CongeModule {}
