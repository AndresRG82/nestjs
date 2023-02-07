import { Injectable } from '@nestjs/common';
import { CreatePasswordresetDto } from './dto/create-passwordreset.dto';
import { UpdatePasswordresetDto } from './dto/update-passwordreset.dto';

@Injectable()
export class PasswordresetsService {
  create(createPasswordresetDto: CreatePasswordresetDto) {
    return 'This action adds a new passwordreset';
  }

  findAll() {
    return `This action returns all passwordresets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} passwordreset`;
  }

  update(id: number, updatePasswordresetDto: UpdatePasswordresetDto) {
    return `This action updates a #${id} passwordreset`;
  }

  remove(id: number) {
    return `This action removes a #${id} passwordreset`;
  }
}
