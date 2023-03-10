import { Module } from '@nestjs/common';
import { TestsService } from './tests.service';
import { TestsController } from './tests.controller';
import { Tests } from './entities/test.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3Service } from 'src/files/S3.service';
import { OcrService } from './ocr.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tests])],
  exports: [TestsService],
  controllers: [TestsController],
  providers: [TestsService, S3Service, OcrService],
})
export class TestsModule {
  INACTIVE = 0;
  ACTIVE = 1;

  /* state */
  APPROVED = 1;
  REJECTED = 2;

  /* actions */
  TOUCH = 1;
  BUTTONS = 2;
  CAMERA = 3;
  SCREEN = 4;
  WIFI = 5;
  BLUETHOOT = 6;
  FLASH = 7;
}
