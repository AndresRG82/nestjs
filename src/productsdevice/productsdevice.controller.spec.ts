import { Test, TestingModule } from '@nestjs/testing';
import { ProductsdeviceController } from './productsdevice.controller';
import { ProductsdeviceService } from './productsdevice.service';

describe('ProductsdeviceController', () => {
  let controller: ProductsdeviceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsdeviceController],
      providers: [ProductsdeviceService],
    }).compile();

    controller = module.get<ProductsdeviceController>(ProductsdeviceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
