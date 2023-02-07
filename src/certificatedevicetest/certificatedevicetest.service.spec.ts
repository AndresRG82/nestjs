import { Test, TestingModule } from '@nestjs/testing';
import { CertificatedevicetestService } from './certificatedevicetest.service';

describe('CertificatedevicetestService', () => {
  let service: CertificatedevicetestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CertificatedevicetestService],
    }).compile();

    service = module.get<CertificatedevicetestService>(
      CertificatedevicetestService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
