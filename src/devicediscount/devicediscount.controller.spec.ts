import { Test, TestingModule } from '@nestjs/testing';
import { DevicediscountController } from './devicediscount.controller';
import { DevicediscountService } from './devicediscount.service';

describe('DevicediscountController', () => {
  let controller: DevicediscountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevicediscountController],
      providers: [DevicediscountService],
    }).compile();

    controller = module.get<DevicediscountController>(DevicediscountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
