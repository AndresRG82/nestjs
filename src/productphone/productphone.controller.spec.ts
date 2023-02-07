import { Test, TestingModule } from '@nestjs/testing';
import { ProductphoneController } from './productphone.controller';
import { ProductphoneService } from './productphone.service';

describe('ProductphoneController', () => {
  let controller: ProductphoneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductphoneController],
      providers: [ProductphoneService],
    }).compile();

    controller = module.get<ProductphoneController>(ProductphoneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
