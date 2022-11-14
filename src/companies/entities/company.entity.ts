import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column({ type: 'timestamp' })
  created_at: string;

  @Column({ type: 'timestamp' })
  updated_at: string;

  @Column({ type: 'varchar', length: 255 })
  title_drop: string;

  @Column({ type: 'varchar', length: 255 })
  phone_number: string;

  @Column({ type: 'varchar', length: 255 })
  email_contact: string;

  @Column({ type: 'varchar', length: 255 })
  whatsapp_contact: string;

  @Column({ type: 'varchar', length: 255 })
  second_logo: string;

  @Column({ type: 'varchar', length: 255 })
  web_url: string;
}
