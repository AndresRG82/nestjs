import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Companies } from './entities/companies.entity';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { AdminsModule } from 'src/admins/admins.module';

@Module({
  imports: [AdminsModule, TypeOrmModule.forFeature([Companies])],
  controllers: [CompanyController],
  providers: [CompanyService],
  exports: [CompanyService],
})
export class CompanyModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;
}
