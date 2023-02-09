import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('unsupported_devices', { schema: 'public' })
export class UnsupportedDevices {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('character varying', { name: 'model', length: 255 })
  public model: string;

  @Column('integer', { name: 'times_used' })
  public timesUsed: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;
}
