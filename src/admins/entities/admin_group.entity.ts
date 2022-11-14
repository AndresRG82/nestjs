import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Permissions } from './permissions.entity';
import { Admins } from './admin.entity';

@Entity()
export class Admin_group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  group_name: string;

  @OneToMany(() => Permissions, (permission) => permission.group)
  permissions: Permissions[];

  @OneToMany(() => Admins, (admin) => admin.group)
  admins: Admins[];

  @Exclude()
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: string;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: string;
}
