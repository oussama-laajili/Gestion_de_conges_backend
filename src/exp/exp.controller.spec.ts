import { Test, TestingModule } from '@nestjs/testing';
import { ExpController } from './exp.controller';
import { ExpService } from './exp.service';

describe('ExpController', () => {
  let controller: ExpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpController],
      providers: [ExpService],
    }).compile();

    controller = module.get<ExpController>(ExpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
