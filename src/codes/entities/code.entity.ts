import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { Users } from 'src/admins/entities/users.entity';
import { Exclude } from 'class-transformer';
import { Companies } from 'src/company/entities/companies.entity';
import { Code_group } from './code_group.entity';

@Entity()
export class Code {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  code: string;

  @Column({ type: 'int2' })
  status: number;

  @Column({ type: 'int4', nullable: true })
  times_used: number;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: string;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: string;

  @ManyToOne(() => Code_group, (group) => group.codes)
  code_group: Code_group;

  @ManyToOne(() => Companies, (company) => company.codes)
  company: Companies;

  @ManyToMany(() => Users, (user) => user.codes)
  user: Users;
}
