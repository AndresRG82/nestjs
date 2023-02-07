import { Test, TestingModule } from '@nestjs/testing';
import { DevicetestController } from './devicetest.controller';
import { DevicetestService } from './devicetest.service';

describe('DevicetestController', () => {
  let controller: DevicetestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DevicetestController],
      providers: [DevicetestService],
    }).compile();

    controller = module.get<DevicetestController>(DevicetestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
