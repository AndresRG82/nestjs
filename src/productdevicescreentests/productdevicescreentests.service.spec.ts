import { Test, TestingModule } from '@nestjs/testing';
import { ProductdevicescreentestsService } from './productdevicescreentests.service';

describe('ProductdevicescreentestsService', () => {
  let service: ProductdevicescreentestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductdevicescreentestsService],
    }).compile();

    service = module.get<ProductdevicescreentestsService>(
      ProductdevicescreentestsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
