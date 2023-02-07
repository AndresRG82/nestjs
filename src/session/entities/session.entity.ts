import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sessions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  user_id: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  ip_adress: string;

  @Column({ type: 'text' })
  user_agent: string;

  @Column({ type: 'json', nullable: true })
  payload: JSON;

  @Column({ type: 'varchar', nullable: true })
  last_activity: string;
}
