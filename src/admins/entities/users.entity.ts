import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { User_group } from './user_group.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  lastname: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  rut: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'date', nullable: true })
  email_verified_at: Date;

  @Exclude()
  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ type: 'int4', default: 1 })
  status: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  confirmation_token: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  remember_token: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  facebook_id: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  google_id: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  apple_id: string;

  @ManyToOne(() => User_group, (group) => group.group_name)
  group: User_group;

  @Exclude()
  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  created_at: string;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamptz', nullable: true })
  updated_at: string;
}
