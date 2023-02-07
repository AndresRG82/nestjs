import { Test, TestingModule } from '@nestjs/testing';
import { GroupphonesController } from './groupphones.controller';
import { GroupphonesService } from './groupphones.service';

describe('GroupphonesController', () => {
  let controller: GroupphonesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupphonesController],
      providers: [GroupphonesService],
    }).compile();

    controller = module.get<GroupphonesController>(GroupphonesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
