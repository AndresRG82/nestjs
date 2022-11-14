import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from '../services/auth.service';
import { AdminsService } from 'src/admins/services/admins.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private adminsService: AdminsService,
  ) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() user) {
    const admin = await this.adminsService.findByEmailWithRelations(user.email);
    return this.authService.generateToken(admin);
  }
}
