import { Test, TestingModule } from '@nestjs/testing';
import { ProductdevicescreentestsController } from './productdevicescreentests.controller';
import { ProductdevicescreentestsService } from './productdevicescreentests.service';

describe('ProductdevicescreentestsController', () => {
  let controller: ProductdevicescreentestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductdevicescreentestsController],
      providers: [ProductdevicescreentestsService],
    }).compile();

    controller = module.get<ProductdevicescreentestsController>(
      ProductdevicescreentestsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
