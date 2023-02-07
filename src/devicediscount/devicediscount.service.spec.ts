import { Test, TestingModule } from '@nestjs/testing';
import { DevicediscountService } from './devicediscount.service';

describe('DevicediscountService', () => {
  let service: DevicediscountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DevicediscountService],
    }).compile();

    service = module.get<DevicediscountService>(DevicediscountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
