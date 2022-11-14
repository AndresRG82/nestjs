import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from './entities/user.entity';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private userRepo: Repository<Users>) {}
  create(data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    return this.userRepo.save(newUser);
  }

  findAll() {
    return this.userRepo.find();
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOneBy({ id });
    if (!user) {
      throw new NotFoundException(`Usuario #${id} no encontrado`);
    }
    return user;
  }

  async update(id: number, payload: UpdateUserDto) {
    const user = await this.findOne(id);
    //user.updated_at = date.toString();
    this.userRepo.merge(user, payload);
    return this.userRepo.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException(`Usuario #${id} no encontrado`);
    }
    return this.userRepo.delete(id);
  }
}
