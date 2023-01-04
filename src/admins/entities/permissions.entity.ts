import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { User_group } from './user_group.entity';

@Entity()
export class Permissions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  permission: string;

  @ManyToMany(() => User_group, (group) => group.permissions)
  group: User_group;

  @Exclude()
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: string;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: string;
}
