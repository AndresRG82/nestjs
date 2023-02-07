import { Test, TestingModule } from '@nestjs/testing';
import { UnsupporteddevicesController } from './unsupporteddevices.controller';
import { UnsupporteddevicesService } from './unsupporteddevices.service';

describe('UnsupporteddevicesController', () => {
  let controller: UnsupporteddevicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnsupporteddevicesController],
      providers: [UnsupporteddevicesService],
    }).compile();

    controller = module.get<UnsupporteddevicesController>(
      UnsupporteddevicesController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
