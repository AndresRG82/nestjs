import { Test, TestingModule } from '@nestjs/testing';
import { CertificatedevicetestController } from './certificatedevicetest.controller';
import { CertificatedevicetestService } from './certificatedevicetest.service';

describe('CertificatedevicetestController', () => {
  let controller: CertificatedevicetestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CertificatedevicetestController],
      providers: [CertificatedevicetestService],
    }).compile();

    controller = module.get<CertificatedevicetestController>(
      CertificatedevicetestController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
