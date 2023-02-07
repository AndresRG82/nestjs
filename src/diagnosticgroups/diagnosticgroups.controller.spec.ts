import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosticgroupsController } from './diagnosticgroups.controller';
import { DiagnosticgroupsService } from './diagnosticgroups.service';

describe('DiagnosticgroupsController', () => {
  let controller: DiagnosticgroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiagnosticgroupsController],
      providers: [DiagnosticgroupsService],
    }).compile();

    controller = module.get<DiagnosticgroupsController>(
      DiagnosticgroupsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
