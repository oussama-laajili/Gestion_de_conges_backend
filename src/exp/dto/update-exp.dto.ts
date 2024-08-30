import { PartialType } from '@nestjs/mapped-types';
import { CreateExpDto } from './create-exp.dto';

export class UpdateExpDto extends PartialType(CreateExpDto) {}
