// src/employees/dto/create-employee.dto.ts
import { IsString, IsNumber, IsArray } from 'class-validator';
import { Conge } from 'src/schema/conge';

export class CreateEmployeeDto {
  @IsString()
  readonly email: string;

  @IsNumber()
  readonly congemaladierestant: number;

  @IsNumber()
  readonly congeannuelrestant: number;

  @IsNumber()
  readonly congepersonellerestant: number;

  @IsArray()
  readonly congehistorique: Conge[];
}
