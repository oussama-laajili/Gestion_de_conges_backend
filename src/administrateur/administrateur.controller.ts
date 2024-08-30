// src/users/controllers/administrateur.controller.ts
import { Controller, Get, Post, Body, Query, NotFoundException } from '@nestjs/common';
import { AdministrateurService } from './administrateur.service';
import { CreateAdministrateurDto } from './dto/CreateAdministrateurDto ';

@Controller('administrateurs')
export class AdministrateurController {
  constructor(private readonly administrateurService: AdministrateurService) {}

  @Post()
  async create(@Body() createAdministrateurDto: CreateAdministrateurDto) {
    return this.administrateurService.create(createAdministrateurDto);
  }
  @Get()
  async getAllAdministrateurs() { // Handle GET requests at /Administrateur
    return this.administrateurService.getAllAdministrateurs();
  }
  // Add other administrateur-specific endpoints here
}
