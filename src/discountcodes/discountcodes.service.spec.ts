import { Test, TestingModule } from '@nestjs/testing';
import { DiscountcodesService } from './discountcodes.service';

describe('DiscountcodesService', () => {
  let service: DiscountcodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscountcodesService],
    }).compile();

    service = module.get<DiscountcodesService>(DiscountcodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
