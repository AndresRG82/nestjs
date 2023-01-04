import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { Companies } from './entities/companies.entity';
import { AdminsModule } from 'src/admins/admins.module';

@Module({
  imports: [TypeOrmModule.forFeature([Companies]), AdminsModule],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {}
