import { Test, TestingModule } from '@nestjs/testing';
import { PhonetestsController } from './phonetests.controller';
import { PhonetestsService } from './phonetests.service';

describe('PhonetestsController', () => {
  let controller: PhonetestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhonetestsController],
      providers: [PhonetestsService],
    }).compile();

    controller = module.get<PhonetestsController>(PhonetestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
