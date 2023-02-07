import { Test, TestingModule } from '@nestjs/testing';
import { PasswordresetsService } from './passwordresets.service';

describe('PasswordresetsService', () => {
  let service: PasswordresetsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordresetsService],
    }).compile();

    service = module.get<PasswordresetsService>(PasswordresetsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
