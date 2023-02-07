import { Test, TestingModule } from '@nestjs/testing';
import { ProductsdeviceService } from './productsdevice.service';

describe('ProductsdeviceService', () => {
  let service: ProductsdeviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsdeviceService],
    }).compile();

    service = module.get<ProductsdeviceService>(ProductsdeviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
