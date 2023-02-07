import { Test, TestingModule } from '@nestjs/testing';
import { PlatformtestController } from './platformtest.controller';
import { PlatformtestService } from './platformtest.service';

describe('PlatformtestController', () => {
  let controller: PlatformtestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlatformtestController],
      providers: [PlatformtestService],
    }).compile();

    controller = module.get<PlatformtestController>(PlatformtestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
