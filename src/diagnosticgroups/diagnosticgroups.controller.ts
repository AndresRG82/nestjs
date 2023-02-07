import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DiagnosticgroupsService } from './diagnosticgroups.service';
import { CreateDiagnosticgroupDto } from './dto/create-diagnosticgroup.dto';
import { UpdateDiagnosticgroupDto } from './dto/update-diagnosticgroup.dto';

@Controller('diagnosticgroups')
export class DiagnosticgroupsController {
  constructor(
    private readonly diagnosticgroupsService: DiagnosticgroupsService,
  ) {}

  @Post()
  create(@Body() createDiagnosticgroupDto: CreateDiagnosticgroupDto) {
    return this.diagnosticgroupsService.create(createDiagnosticgroupDto);
  }

  @Get()
  findAll() {
    return this.diagnosticgroupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.diagnosticgroupsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDiagnosticgroupDto: UpdateDiagnosticgroupDto,
  ) {
    return this.diagnosticgroupsService.update(+id, updateDiagnosticgroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.diagnosticgroupsService.remove(+id);
  }
}
