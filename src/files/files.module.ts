import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { Files } from './entities/file.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Files])],
  exports: [FilesService],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
