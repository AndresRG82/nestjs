import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Devices } from 'src/devices/entities/device.entity';
import { Phones } from 'src/phones/entities/phone.entity';

@Index('codes_pkey', ['id'], { unique: true })
@Entity('models', { schema: 'public' })
export class Models {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('character varying', { name: 'model', length: 255 })
  public model: string;

  @Column('integer', { name: 'status', default: () => '1' })
  public status: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @OneToMany(() => Devices, (devices) => devices.model_id)
  public devices: Devices[];

  @ManyToOne(() => Phones, (phones) => phones.models)
  @JoinColumn([{ name: 'phone_id', referencedColumnName: 'id' }])
  public phone: Phones;
}
