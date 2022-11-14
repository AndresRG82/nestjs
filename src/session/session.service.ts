import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Sessions } from './entities/session.entity';
import { CreateSessionDto, UpdateSessionDto } from './dto/session.dto';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(Sessions) private sessionRepo: Repository<Sessions>,
  ) {}

  create(data: CreateSessionDto) {
    const newSession = this.sessionRepo.create(data);
    return this.sessionRepo.save(newSession);
  }

  findAll() {
    return `This action returns all session`;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number, updateSessionDto: UpdateSessionDto) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
