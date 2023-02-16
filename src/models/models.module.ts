import { Module } from '@nestjs/common';
import { ModelsService } from './models.service';
import { ModelsController } from './models.controller';
import { Models } from './entities/model.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Models])],
  exports: [ModelsService],
  controllers: [ModelsController],
  providers: [ModelsService],
})
export class ModelsModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;
}
