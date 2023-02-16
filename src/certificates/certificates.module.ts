import { Module } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CertificatesController } from './certificates.controller';
import { Certificates } from './entities/certificate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Certificates])],
  exports: [CertificatesService],
  controllers: [CertificatesController],
  providers: [CertificatesService],
})
export class CertificatesModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;

  /* Valid states */
  CREATED = 0;
  VALID = 1;
}
