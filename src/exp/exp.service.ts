import { Injectable } from '@nestjs/common';
import { CreateExpDto } from './dto/create-exp.dto';
import { UpdateExpDto } from './dto/update-exp.dto';

@Injectable()
export class ExpService {
  create(createExpDto: CreateExpDto) {
    return 'This action adds a new exp';
  }

  findAll() {
    return `This action returns all exp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} exp`;
  }

  update(id: number, updateExpDto: UpdateExpDto) {
    return `This action updates a #${id} exp`;
  }

  remove(id: number) {
    return `This action removes a #${id} exp`;
  }
}
