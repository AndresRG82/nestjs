import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { AdminsService } from 'src/admins/services/admins.service';
import { Admins } from 'src/admins/entities/admin.entity';
import { PayloadToken } from '../models/token.model';

@Injectable()
export class AuthService {
  constructor(
    private adminsService: AdminsService,
    private jwtService: JwtService,
  ) {}

  async validateAdmin(email: string, password: string) {
    const user = await this.adminsService.findByEmail(email);
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      return user;
    }
    return null;
  }

  async generateToken(admin: Admins) {
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
}
