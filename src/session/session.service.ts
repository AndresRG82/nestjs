import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.sessionRepo.find();
  }

  findOne(id: string) {
    return this.sessionRepo.findOne({ where: { id: id } });
  }

  async update(id: string, payload: UpdateSessionDto) {
    const newSession = await this.findOne(id);
    if (!newSession) {
      throw new NotFoundException('Could not update data, session not found.');
    }
    const updated_session = this.sessionRepo.merge(newSession, payload);
    return this.sessionRepo.save(updated_session);
  }

  async remove(id: string) {
    const session = await this.findOne(id);
    if (!session) {
      throw new NotFoundException(`Could not delete, session not found`);
    }
    return this.sessionRepo.delete(id);
  }
}
