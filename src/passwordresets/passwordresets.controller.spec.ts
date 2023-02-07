import { Test, TestingModule } from '@nestjs/testing';
import { PasswordresetsController } from './passwordresets.controller';
import { PasswordresetsService } from './passwordresets.service';

describe('PasswordresetsController', () => {
  let controller: PasswordresetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PasswordresetsController],
      providers: [PasswordresetsService],
    }).compile();

    controller = module.get<PasswordresetsController>(PasswordresetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
