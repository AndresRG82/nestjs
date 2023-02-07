import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { CompanyService } from './company.service';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/create-company.dto';

@Controller('coveradmin')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get('companies')
  @ApiOperation({ description: 'Get all companies' })
  findAll() {
    return this.companyService.findAll();
  }

  @Get('companies/:id')
  @ApiOperation({ description: 'Get company by ID' })
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  @Post('company')
  @ApiOperation({ description: 'Create company' })
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Post('company/createUpdate')
  @ApiOperation({ description: 'Update company' })
  update(@Body() payload: UpdateCompanyDto) {
    return this.companyService.update(payload);
  }

  @Post('company/delete')
  @ApiOperation({ description: 'Delete company' })
  remove(@Body() payload: UpdateCompanyDto) {
    return this.companyService.remove(payload);
  }
}
