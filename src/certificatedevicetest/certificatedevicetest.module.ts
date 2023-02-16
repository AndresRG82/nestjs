import { Module } from '@nestjs/common';
import { CertificatedevicetestService } from './certificatedevicetest.service';
import { CertificatedevicetestController } from './certificatedevicetest.controller';
import { CertificateDeviceTest } from './entities/certificatedevicetest.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CertificateDeviceTest])],
  exports: [CertificatedevicetestService],
  controllers: [CertificatedevicetestController],
  providers: [CertificatedevicetestService],
})
export class CertificatedevicetestModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;
}
