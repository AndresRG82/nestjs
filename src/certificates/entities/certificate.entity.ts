import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CertificateDeviceTest } from 'src/certificatedevicetest/entities/certificatedevicetest.entity';
import { Devices } from 'src/devices/entities/device.entity';

@Entity('certificates', { schema: 'public' })
export class Certificates {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('uuid', { name: 'name', unique: true })
  public name: string;

  @Column('integer', { name: 'validated' })
  public validated: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @OneToMany(
    () => CertificateDeviceTest,
    (certificateDeviceTest) => certificateDeviceTest.certificate,
  )
  public certificateDeviceTests: CertificateDeviceTest[];

  @ManyToOne(() => Devices, (devices) => devices.certificates)
  @JoinColumn([{ name: 'device_id', referencedColumnName: 'id' }])
  public device: Devices;
}
