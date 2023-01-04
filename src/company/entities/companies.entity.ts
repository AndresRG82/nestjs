import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { User_group as Company_group } from 'src/admins/entities/user_group.entity';

@Entity()
export class Companies {
  @PrimaryGeneratedColumn()
  id: number;

  @Exclude()
  @Column({ type: 'varchar', length: 255, nullable: true })
  client_id: string;

  @Exclude()
  @Column({ type: 'varchar', length: 255, nullable: true })
  client_secret: string;

  @Exclude()
  @Column({ type: 'varchar', length: 255, nullable: true })
  grant_type: string;

  @Column({ type: 'int2' })
  status: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  logo: string;

  @Column({ type: 'varchar', length: 255 })
  primary: string;

  @Column({ type: 'varchar', length: 255 })
  secondary: string;

  @Column({ type: 'int4' })
  company_uid: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  title_drop: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  phone_number: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email_contact: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  whatsapp_contact: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  second_logo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  web_url: string;

  @Exclude()
  @CreateDateColumn({ type: 'timestamptz', nullable: true })
  created_at: string;

  @Exclude()
  @UpdateDateColumn({ type: 'timestamptz', nullable: true })
  updated_at: string;

  @ManyToOne(() => Company_group, (group) => group.group_name)
  group: Company_group;
}
