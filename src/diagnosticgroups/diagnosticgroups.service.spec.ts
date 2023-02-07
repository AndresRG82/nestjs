import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosticgroupsService } from './diagnosticgroups.service';

describe('DiagnosticgroupsService', () => {
  let service: DiagnosticgroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiagnosticgroupsService],
    }).compile();

    service = module.get<DiagnosticgroupsService>(DiagnosticgroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
