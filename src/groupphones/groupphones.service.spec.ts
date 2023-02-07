import { Test, TestingModule } from '@nestjs/testing';
import { GroupphonesService } from './groupphones.service';

describe('GroupphonesService', () => {
  let service: GroupphonesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupphonesService],
    }).compile();

    service = module.get<GroupphonesService>(GroupphonesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
