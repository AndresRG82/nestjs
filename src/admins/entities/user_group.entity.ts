import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { Permissions } from './permissions.entity';
import { Users } from './users.entity';

@Entity()
export class User_group {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  group_name: string;

  @ManyToMany(() => Permissions, (permission) => permission.group)
  @JoinTable({
    name: 'group_permissions',
    joinColumn: { name: 'group_id' },
    inverseJoinColumn: { name: 'permission_id' },
  })
  permissions: Permissions[];

  @OneToMany(() => Users, (user) => user.group)
  admins: Users[];

  @Exclude()
  @CreateDateColumn({ type: 'timestamptz' })
  created_at: string;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamptz' })
  updated_at: string;
}
