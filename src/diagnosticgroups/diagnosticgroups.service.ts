import { Injectable } from '@nestjs/common';
import { CreateDiagnosticgroupDto } from './dto/create-diagnosticgroup.dto';
import { UpdateDiagnosticgroupDto } from './dto/update-diagnosticgroup.dto';

@Injectable()
export class DiagnosticgroupsService {
  create(createDiagnosticgroupDto: CreateDiagnosticgroupDto) {
    return 'This action adds a new diagnosticgroup';
  }

  findAll() {
    return `This action returns all diagnosticgroups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diagnosticgroup`;
  }

  update(id: number, updateDiagnosticgroupDto: UpdateDiagnosticgroupDto) {
    return `This action updates a #${id} diagnosticgroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} diagnosticgroup`;
  }
}
