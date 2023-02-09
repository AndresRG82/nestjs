import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Configs } from 'src/config/entities/config.entity';

@Entity('transactions', { schema: 'public' })
export class Transactions {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  status: number;

  @Column('json', { name: 'elements' })
  elements: object;

  @Column('character varying', { name: 'source', length: 255 })
  source: string;

  @Column('character varying', { name: 'target', length: 255 })
  target: string;

  @Column('character varying', { name: 'callback', length: 255 })
  callback: string;

  @Column('boolean', { name: 'success_display_flag', default: () => 'false' })
  successDisplayFlag: boolean;

  @Column('character varying', { name: 'trust_id', length: 255 })
  trustId: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('integer', {
    name: 'tos_version',
    nullable: true,
    default: () => '1',
  })
  tosVersion: number | null;

  @ManyToOne(() => Configs, (configs) => configs.transactions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'config_id', referencedColumnName: 'id' }])
  config: Configs;
}
