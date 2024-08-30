// src/users/schemas/administrateur.schema.ts
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';

@Schema()
export class Administrateur extends User {
  // No additional attributes
}

export const AdministrateurSchema = SchemaFactory.createForClass(Administrateur);
