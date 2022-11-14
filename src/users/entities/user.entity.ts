import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  lastname: string;

  @Column({ type: 'varchar', length: 255 })
  email: string;

  @Column({ type: 'date', nullable: true })
  email_verified_at: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  password: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  rut: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  avatar: string;

  @Column({ type: 'int2', default: 1 })
  status: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  confirmation_token: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  remember_token: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  facebook_id: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  google_id: string;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })
  apple_id: string;

  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP(4)',
  })
  created_at: string;

  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP(4)',
  })
  updated_at: string;
}
