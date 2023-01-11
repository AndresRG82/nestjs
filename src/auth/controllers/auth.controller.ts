import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { AuthService } from '../services/auth.service';
import { AdminsService } from 'src/admins/services/admins.service';
import { CompanyService } from 'src/company/company.service';

@Controller('oauth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private adminsService: AdminsService,
    private companyService: CompanyService,
  ) {}
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() user) {
    const admin = await this.adminsService.findByEmailWithRelations(user.email);
    return this.authService.generateToken(admin);
  }

  @Post('token')
  async channelLogin(@Body() user) {
    const client = await this.companyService.findWithRelations(user.client_id);
    return this.authService.generateCompanyToken(client);
  }
}
