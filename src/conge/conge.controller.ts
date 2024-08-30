import { Controller, Post, Body, Get, Query, UseInterceptors, UploadedFiles, BadRequestException, Param, Put } from '@nestjs/common';
import { CongeService } from './conge.service';
import { CreateCongeDto } from './dto/CreateCongeDto ';
import { Conge } from 'src/schema/conge';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller('conges')
export class CongeController {
  constructor(private readonly congeService: CongeService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'supportingdoc', maxCount: 1 },
    ]),
  )
  async createConge(
    @Body() createCongeDto: CreateCongeDto,
    @UploadedFiles() files: { supportingdoc?: Express.Multer.File[] },
  ): Promise<Conge> {
    try {
      if (files.supportingdoc) {
        console.log('Supporting document file:', files.supportingdoc[0]); // Log file details
        createCongeDto.supportingdoc = await this.congeService.uploadToCloudinary(files.supportingdoc[0]);
      }
      return this.congeService.createConge(createCongeDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get('by-email')
  async getCongesByEmail(@Query('email') email: string): Promise<Conge[]> {
    return this.congeService.getCongesByEmail(email);
  }

  
  

  @Get('pending')
  async getPendingConges(): Promise<Conge[]> {
    return this.congeService.getPendingConges();
  }

  @Get('all-appointments')
  async getAllAppointments(): Promise<Conge[]> {
    return this.congeService.getAllAppointments();
  }

  @Get('count-by-type')
  async countCongesByType(): Promise<{ labels: string[], data: number[] }> {
    return this.congeService.countCongesByType();
  }

  @Get('count-special-types')
  async countSpecialTypes(): Promise<{ [key: string]: number }> {
    return this.congeService.countSpecialTypes();
  }

  @Get('count-by-status')
  async countCongesByStatus(): Promise<{ labels: string[], data: number[] }> {
    return this.congeService.countCongesByStatus();
  }

  @Get('conge-status-by-type')
async getCongeStatusByType() {
  const congeTypes = ['Congés payés', 'Congés sans solde', 'Congés spéciaux pour raison de famille'];
  const statusCountsByCongeType = [];

  for (const congeType of congeTypes) {
    const acceptedCount = await this.congeService.countCongesByTypeAndStatus(congeType, 'accepte');
    const refusedCount = await this.congeService.countCongesByTypeAndStatus(congeType, 'refuse');

    statusCountsByCongeType.push({
      congeType,
      data: [acceptedCount, refusedCount],
    });
  }

  return statusCountsByCongeType;
}
@Get(':email')
  async getUsersByEmail(@Param('email') email: string) {
    return this.congeService.getUsersByEmail(email);
  }

@Put(':id/status')
async updateCongeStatus(
  @Param('id') id: string,
  @Body('status') status: string,
): Promise<Conge> {
  return this.congeService.updateCongeStatus(id, status);
}

}
