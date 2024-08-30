// src/users/schemas/employee.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './user.schema';
import { Conge, CongeSchema } from './conge';
import { Document, Types } from 'mongoose';
export type EmployeeDocument = Employee & Document;
@Schema()
export class Employee  {
  @Prop({ type: String, required: true })
  email: string;

  @Prop({ required: true })
  congemaladierestant: number;

  @Prop({ required: true })
  congeannuelrestant: number;

  @Prop({ required: true })
  congepersonellerestant: number;

  @Prop({ type: [CongeSchema], default: [] })
  congehistorique: Types.DocumentArray<Conge>;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
