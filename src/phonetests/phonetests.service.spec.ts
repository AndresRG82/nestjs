import { Test, TestingModule } from '@nestjs/testing';
import { PhonetestsService } from './phonetests.service';

describe('PhonetestsService', () => {
  let service: PhonetestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonetestsService],
    }).compile();

    service = module.get<PhonetestsService>(PhonetestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
