import { Test, TestingModule } from '@nestjs/testing';
import { ProductphoneService } from './productphone.service';

describe('ProductphoneService', () => {
  let service: ProductphoneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductphoneService],
    }).compile();

    service = module.get<ProductphoneService>(ProductphoneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
