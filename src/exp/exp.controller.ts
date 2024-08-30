import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExpService } from './exp.service';
import { CreateExpDto } from './dto/create-exp.dto';
import { UpdateExpDto } from './dto/update-exp.dto';

@Controller('exp')
export class ExpController {
  constructor(private readonly expService: ExpService) {}

  @Post()
  create(@Body() createExpDto: CreateExpDto) {
    return this.expService.create(createExpDto);
  }

  @Get()
  findAll() {
    return this.expService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpDto: UpdateExpDto) {
    return this.expService.update(+id, updateExpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expService.remove(+id);
  }
}
