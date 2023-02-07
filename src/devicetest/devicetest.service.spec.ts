import { Test, TestingModule } from '@nestjs/testing';
import { DevicetestService } from './devicetest.service';

describe('DevicetestService', () => {
  let service: DevicetestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevicetestService],
    }).compile();

    service = module.get<DevicetestService>(DevicetestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
