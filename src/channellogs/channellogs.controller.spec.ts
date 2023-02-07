import { Test, TestingModule } from '@nestjs/testing';
import { ChannellogsController } from './channellogs.controller';
import { ChannellogsService } from './channellogs.service';

describe('ChannellogsController', () => {
  let controller: ChannellogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChannellogsController],
      providers: [ChannellogsService],
    }).compile();

    controller = module.get<ChannellogsController>(ChannellogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
