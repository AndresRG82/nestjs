import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { Files } from './entities/file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3Service } from './S3.service';

@Module({
  imports: [TypeOrmModule.forFeature([Files])],
  exports: [FilesService],
  controllers: [FilesController],
  providers: [FilesService, S3Service],
})
export class FilesModule {}
