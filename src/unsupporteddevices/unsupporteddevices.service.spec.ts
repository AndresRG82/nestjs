import { Test, TestingModule } from '@nestjs/testing';
import { UnsupporteddevicesService } from './unsupporteddevices.service';

describe('UnsupporteddevicesService', () => {
  let service: UnsupporteddevicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnsupporteddevicesService],
    }).compile();

    service = module.get<UnsupporteddevicesService>(UnsupporteddevicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
