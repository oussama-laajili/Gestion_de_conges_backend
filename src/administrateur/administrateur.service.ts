// src/users/services/administrateur.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Administrateur } from 'src/schema/administrateur';
import { CreateAdministrateurDto } from './dto/CreateAdministrateurDto ';

@Injectable()
export class AdministrateurService {
  constructor(@InjectModel('Administrateur') private readonly administrateurModel: Model<Administrateur>) {}

  async create(createAdministrateurDto: CreateAdministrateurDto): Promise<Administrateur> {
    const createdAdministrateur = new this.administrateurModel(createAdministrateurDto);
    return createdAdministrateur.save();
  }
  async getAllAdministrateurs(): Promise<Administrateur[]> {
    return this.administrateurModel.find().exec();
  }
  // Add other administrateur-specific methods here
}
