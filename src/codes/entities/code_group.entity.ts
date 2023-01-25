import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Users } from 'src/admins/entities/users.entity';
import { Code } from './code.entity';

@Entity()
export class Code_group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int2' })
  status: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'int2' })
  type: number;

  @Column({ type: 'int4' })
  value: number;

  @Column({ type: 'int2' })
  expires: number;

  @Column({ type: 'int4' })
  stock: number;

  @Column({ type: 'date' })
  date: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: string;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: string;

  //WIP
  @Column({ type: 'varchar', length: 255, nullable: true })
  asistance_id: string;

  @ManyToMany(() => Users, (user) => user.code_groups)
  user_id: Users;

  @OneToMany(() => Code, (code) => code.code_group)
  codes: Code[];
}
