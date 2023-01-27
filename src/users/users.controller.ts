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
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('v1')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  create(@Body() userData: CreateUserDto) {
    if (userData.password != null && userData.email != null) {
      return this.usersService.create(userData);
    }
    throw new BadRequestException(
      'Please confirm that the data entered are as requested.',
    );
  }

  @Get('getProfiles')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('profile')
  decodeToken(@Req() request) {
    const authHeader = request.headers.authorization.split(' ');
    const accessToken = authHeader[1];
    return this.usersService.findByToken(accessToken);
  }

  @Get('profile/avatar/:token')
  getAvatar(@Param('token') token: string) {
    return this.usersService.findByToken(token);
  }

  @Get('profile/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put('profile/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('profile/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
