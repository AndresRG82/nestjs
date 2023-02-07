import { Injectable } from '@nestjs/common';
import { CreateGroupphoneDto } from './dto/create-groupphone.dto';
import { UpdateGroupphoneDto } from './dto/update-groupphone.dto';

@Injectable()
export class GroupphonesService {
  create(createGroupphoneDto: CreateGroupphoneDto) {
    return 'This action adds a new groupphone';
  }

  findAll() {
    return `This action returns all groupphones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupphone`;
  }

  update(id: number, updateGroupphoneDto: UpdateGroupphoneDto) {
    return `This action updates a #${id} groupphone`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupphone`;
  }
}
