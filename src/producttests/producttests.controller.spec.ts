import { Test, TestingModule } from '@nestjs/testing';
import { ProducttestsController } from './producttests.controller';
import { ProducttestsService } from './producttests.service';

describe('ProducttestsController', () => {
  let controller: ProducttestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducttestsController],
      providers: [ProducttestsService],
    }).compile();

    controller = module.get<ProducttestsController>(ProducttestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
