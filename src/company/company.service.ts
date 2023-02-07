import {
  Injectable,
  NotFoundException,
  NotAcceptableException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { Companies } from './entities/companies.entity';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/create-company.dto';
import { GroupsService } from 'src/admins/services/groups.service';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Companies) private companiesRepo: Repository<Companies>,
    private groupsService: GroupsService,
  ) {}

  findAll() {
    return this.companiesRepo.find();
  }

  async create(company: CreateCompanyDto) {
    const newCompany = this.companiesRepo.create(company);
    const exist = await this.alredyExist(newCompany.name);
    if (exist.length != 0) {
      throw new NotAcceptableException('The email is already in use');
    }
    const hashPassword = await bcrypt.hash(newCompany.client_secret, 11);
    newCompany.client_secret = hashPassword;
    if (company.group_id) {
      const group = await this.groupsService.findOne(company.group_id);
      newCompany.group = group;
    }
    return this.companiesRepo.save(newCompany);
  }

  async alredyExist(name) {
    const exist = await this.companiesRepo.findBy({ name });
    return exist;
  }

  async findOne(id: string) {
    const company = await this.companiesRepo.findOne({
      where: { client_id: id },
    });
    if (!company) {
      throw new NotFoundException(`company #${id} not found`);
    }
    return company;
  }
  async findWithRelations(client_id) {
    const company = await this.companiesRepo.findOne({
      where: { client_id: client_id },
      relations: ['group'],
    });
    if (!company) {
      throw new NotFoundException(`Company #${client_id} not found`);
    }
    return company;
  }

  async update(payload: UpdateCompanyDto) {
    const target_company = payload.client_id;
    const company = await this.findOne(target_company);
    if (!company) {
      throw new NotFoundException(
        'Could not update data, company id not found.',
      );
    }
    if (payload.group_id) {
      const group = await this.groupsService.findById(payload.group_id);
      company.group = group;
    }
    const updated_admin = this.companiesRepo.merge(company, payload);
    return this.companiesRepo.save(updated_admin);
  }

  async remove(payload: UpdateCompanyDto) {
    const target_company = await payload.company_uid;
    if (!target_company) {
      throw new NotFoundException(
        `Could not delete company #${target_company}, company not found`,
      );
    }
    this.companiesRepo.delete(target_company);
    return `Company ${target_company} was deleted successfully`;
  }
}
