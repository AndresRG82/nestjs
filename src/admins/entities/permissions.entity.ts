import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Admin_group } from './admin_group.entity';

@Entity()
export class Permissions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  permission: string;

  @ManyToOne(() => Admin_group, (group) => group.permissions)
  group: Admin_group;

  @Exclude()
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: string;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: string;
}
