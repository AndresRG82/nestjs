import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCodeDto, UpdateCodeDto } from '../dto/codes.dto';
import { CreateCodeGroupDto, UpdateCodeGroupDto } from '../dto/codes_group.dto';
import { Code } from '../entities/code.entity';
import { Code_group } from '../entities/code_group.entity';

@Injectable()
export class CodesService {
  constructor(
    @InjectRepository(Code) private codesRepo: Repository<Code>,
    @InjectRepository(Code_group) private codesGRepo: Repository<Code_group>,
  ) {}
  async create(payload: CreateCodeGroupDto) {
    const newGroup = this.codesGRepo.create(payload);
    const exists = await this.findGroup(payload.name);
    if (!exists) {
      await this.codesGRepo.save(newGroup);
      const group = await this.findGroup(newGroup.name);
      for (let i = 0; i < payload.times; i++) {
        let characters = '';
        for (let i = 0; i < 8 - payload.code.length; i++) {
          const randomCharCode = Math.floor(Math.random() * 26) + 65;
          characters += String.fromCharCode(randomCharCode);
        }
        let formatted_code = `${payload.code.toUpperCase()}${characters.toUpperCase()}`;
        if (payload.times == 1) {
          formatted_code = payload.code.toUpperCase();
        }
        const newCode: CreateCodeDto = {
          assistance_id: payload.assistance_id,
          code: formatted_code,
          company_id: payload.company_id,
          date: payload.date,
          expires: payload.expires,
          name: payload.name,
          stock: payload.stock,
          type: payload.type,
          value: payload.value,
          status: 1,
          group: group,
          times_used: 0,
        };
        const code = await this.codesRepo.create(newCode);
        code.code_group = group;
        this.codesRepo.save(code);
      }
    } else {
      throw new NotAcceptableException('The group name is already in use');
    }

    return this.findGroup(payload.name);
  }

  findGroup(name) {
    return this.codesGRepo.findOne({ where: { name: name } });
  }

  findGroupWithRelations(name) {
    return this.codesGRepo.findOne({
      where: { name: name },
      relations: ['codes'],
    });
  }
  findAll() {
    return `This action returns all codes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} code`;
  }

  update(id: number, payload: UpdateCodeDto) {
    return `This action updates a #${id} code`;
  }

  remove(id: number) {
    return `This action removes a #${id} code`;
  }
}
