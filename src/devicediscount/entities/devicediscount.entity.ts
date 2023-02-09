import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Devices } from 'src/devices/entities/device.entity';
import { Discounts } from 'src/discounts/entities/discount.entity';

@Entity('device_discount', { schema: 'public' })
export class DeviceDiscount {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  public id: string;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @Column('character varying', { name: 'code', nullable: true, length: 255 })
  public code: string | null;

  @Column('character varying', {
    name: 'transaction_id',
    nullable: true,
    length: 255,
  })
  public transactionId: string | null;

  @ManyToOne(() => Devices, (devices) => devices.deviceDiscounts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'device_id', referencedColumnName: 'id' }])
  public device: Devices;

  @ManyToOne(() => Discounts, (discounts) => discounts.deviceDiscounts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'discount_id', referencedColumnName: 'id' }])
  public discount: Discounts;
}
