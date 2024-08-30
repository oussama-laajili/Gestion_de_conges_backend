// src/conge/dto/create-conge.dto.ts
import { IsDate, IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCongeDto {
  @IsDate()
  @IsNotEmpty()
  start: string;

  @IsDate()
  @IsNotEmpty()
  end: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  statut: string;

  @IsString()
  @IsNotEmpty()
  commentaire: string;

  @IsString()
  @IsNotEmpty()
  supportingdoc: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}
