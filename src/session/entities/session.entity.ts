import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sessions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'int4', nullable: true })
  user_id: number;

  @Column({ type: 'varchar', length: 45, nullable: true })
  ip_adress: string;

  @Column({ type: 'text' })
  user_agent: string;

  @Column({ type: 'text' })
  payload: string;

  @Column({ type: 'int4' })
  last_activity: number;
}
