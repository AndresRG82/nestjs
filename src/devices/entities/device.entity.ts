import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Certificates } from 'src/certificates/entities/certificate.entity';
import { DeviceDiscount } from 'src/devicediscount/entities/devicediscount.entity';
import { DeviceTest } from 'src/devicetest/entities/devicetest.entity';
import { Models } from 'src/models/entities/model.entity';
import { Users } from 'src/users/entities/user.entity';

@Index('devices_pkey', ['id'], { unique: true })
@Index('devices_trust_id_unique', ['trustId'], { unique: true })
@Entity('devices', { schema: 'public' })
export class Devices {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('uuid', { name: 'trust_id', unique: true })
  public trustId: string;

  @Column('character varying', { name: 'model_name', length: 255 })
  public modelName: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @Column('character varying', {
    name: 'tos',
    length: 255,
    default: () => "'0'",
  })
  public tos: string;

  @Column('character varying', {
    name: 'mem_total',
    nullable: true,
    length: 255,
  })
  public memTotal: string | null;

  @Column('character varying', { name: 'imei_1', nullable: true, length: 255 })
  public imei_1: string | null;

  @Column('character varying', { name: 'imei_2', nullable: true, length: 255 })
  public imei_2: string | null;

  @Column('character varying', {
    name: 'imei_img_url',
    nullable: true,
    length: 255,
  })
  public imeiImgUrl: string | null;

  @Column('character varying', {
    name: 'in_motion_id',
    nullable: true,
    length: 255,
  })
  public inMotionId: string | null;

  @Column('text', { name: 'info_raw', nullable: true })
  public infoRaw: string | null;

  @OneToMany(() => Certificates, (certificates) => certificates.device)
  public certificates: Certificates[];

  @OneToMany(() => DeviceDiscount, (deviceDiscount) => deviceDiscount.device)
  public deviceDiscounts: DeviceDiscount[];

  @OneToMany(() => DeviceTest, (deviceTest) => deviceTest.device)
  public deviceTests: DeviceTest[];

  @ManyToOne(() => Models, (models) => models.devices)
  @JoinColumn([{ name: 'model_id', referencedColumnName: 'id' }])
  public model_id: Models;

  @ManyToOne(() => Users, (users) => users.devices)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  public user: Users;
}
