import { BadRequestException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { AdminsService } from 'src/admins/services/admins.service';
import { UsersService } from 'src/users/users.service';
import { Users } from 'src/admins/entities/users.entity';
import { PayloadToken, PayloadCompanyToken } from '../models/token.model';
import { CreateUserDto } from 'src/users/dto/user.dto';
import { Companies } from 'src/company/entities/companies.entity';

@Injectable()
export class AuthService {
  constructor(
    private adminsService: AdminsService,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  //google
  async googleLogin(req) {
    if (!req.user) {
      return 'No user from google';
    }
    const user = req.user;
    const alreadyExists = await this.usersService.findByEmail(user.email);
    if (!alreadyExists) {
      const data = {
        name: user.firstName as string,
        lastname: user.lastName as string,
        email: user.email as string,
        avatar: user.picture as string,
        group_id: 'd27ebfc2-ec3e-4458-ba00-0e4748d4f0ee',
        status: 1,
      };
      const newUser = new CreateUserDto();
      Object.assign(newUser, data);
      await this.usersService.create(newUser);
    }
    const userData = await this.usersService.findByEmail(user.email);
    const userToken = await this.generateToken(userData);

    const payload = { confirmation_token: userToken.access_token };
    await this.usersService.update(userData.id, payload);
    return {
      message: 'User information from google',
      user: user,
    };
  }
  //local
  async validateAdmin(email: string, password: string) {
    const user = await this.adminsService.findByEmail(email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      return user;
    }
    return null;
  }

  async generateToken(admin: Users) {
    const payload: PayloadToken = {
      status: admin.status,
      id: admin.id,
      group: admin.group.group_name,
    };
    return {
      access_token: this.jwtService.sign(payload),
      user: admin.email,
    };
  }
  async generateCompanyToken(company: Companies) {
    if (company.group == null) {
      throw new BadRequestException('The company is not associated to a group');
    }
    const payload: PayloadCompanyToken = {
      client_id: company.client_id,
      client_secret: company.client_secret,
      grant_type: company.grant_type,
      group: company.group.group_name,
    };
    return {
      access_token: this.jwtService.sign(payload),
      user: company.name,
    };
  }
}
