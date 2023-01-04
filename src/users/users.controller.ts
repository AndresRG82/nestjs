import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  BadRequestException,
  Req,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() userData: CreateUserDto) {
    if (userData.password != null && userData.email != null) {
      return this.usersService.create(userData);
    }
    throw new BadRequestException(
      'Please confirm that the data entered are as requested.',
    );
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('profile')
  decodeToken(@Req() request) {
    const authHeader = request.headers.authorization.split(' ');
    const accessToken = authHeader[1];
    return this.usersService.findByToken(accessToken);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Post(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
