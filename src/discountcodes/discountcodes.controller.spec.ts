import { Test, TestingModule } from '@nestjs/testing';
import { DiscountcodesController } from './discountcodes.controller';
import { DiscountcodesService } from './discountcodes.service';

describe('DiscountcodesController', () => {
  let controller: DiscountcodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountcodesController],
      providers: [DiscountcodesService],
    }).compile();

    controller = module.get<DiscountcodesController>(DiscountcodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
