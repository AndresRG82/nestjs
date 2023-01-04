import { CreateAdminDto } from 'src/admins/dto/admin.dto';
import { PartialType } from '@nestjs/mapped-types';
export class CreateUserDto extends CreateAdminDto {}
export class UpdateUserDto extends PartialType(CreateUserDto) {}
