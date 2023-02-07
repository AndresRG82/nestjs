import { Test, TestingModule } from '@nestjs/testing';
import { ProducttestsService } from './producttests.service';

describe('ProducttestsService', () => {
  let service: ProducttestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducttestsService],
    }).compile();

    service = module.get<ProducttestsService>(ProducttestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
