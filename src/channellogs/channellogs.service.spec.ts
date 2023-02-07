import { Test, TestingModule } from '@nestjs/testing';
import { ChannellogsService } from './channellogs.service';

describe('ChannellogsService', () => {
  let service: ChannellogsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChannellogsService],
    }).compile();

    service = module.get<ChannellogsService>(ChannellogsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
