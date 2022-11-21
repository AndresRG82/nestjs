import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Admin_group } from './admin_group.entity';

@Entity()
export class Admins {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  lastname: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Exclude()
  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'int4', default: 1 })
  status: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  remember_token: string;

  @ManyToOne(() => Admin_group, (group) => group.group_name)
  group: Admin_group;

  @Exclude()
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: string;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: string;
}
