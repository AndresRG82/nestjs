import { PartialType } from '@nestjs/swagger';
import { CreateDiagnosticgroupDto } from './create-diagnosticgroup.dto';

export class UpdateDiagnosticgroupDto extends PartialType(
  CreateDiagnosticgroupDto,
) {}
