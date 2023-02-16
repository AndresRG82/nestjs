import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { Groups } from './entities/group.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Groups])],
  exports: [GroupsService],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {
  /* status */
  INACTIVE = 0;
  ACTIVE = 1;
}
