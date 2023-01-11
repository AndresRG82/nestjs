import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/create-company.dto';

@Controller('coveradmin')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('companies')
  findAll() {
    return this.companyService.findAll();
  }

  @Get('companies/:id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Post('company')
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Post('company/createUpdate')
  update(@Body() payload: UpdateCompanyDto) {
    return this.companyService.update(payload);
  }

  @Post('company/delete')
  remove(@Body() payload: UpdateCompanyDto) {
    return this.companyService.remove(payload);
  }
}
