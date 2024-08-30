// src/users/schemas/manager.schema.ts
import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';

@Schema()
export class Manager extends User {
  // No additional attributes
}

export const ManagerSchema = SchemaFactory.createForClass(Manager);
