import { Module } from '@nestjs/common';
import { DiagnosticgroupsService } from './diagnosticgroups.service';
import { DiagnosticgroupsController } from './diagnosticgroups.controller';
import { DiagnosticGroups } from './entities/diagnosticgroup.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([DiagnosticGroups])],
  exports: [DiagnosticgroupsService],
  controllers: [DiagnosticgroupsController],
  providers: [DiagnosticgroupsService],
})
export class DiagnosticgroupsModule {}
