import { Test, TestingModule } from '@nestjs/testing';
import { PlatformtestService } from './platformtest.service';

describe('PlatformtestService', () => {
  let service: PlatformtestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlatformtestService],
    }).compile();

    service = module.get<PlatformtestService>(PlatformtestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
