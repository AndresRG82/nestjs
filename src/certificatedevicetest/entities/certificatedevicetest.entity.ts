import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Certificates } from 'src/certificates/entities/certificate.entity';
import { DeviceTest } from 'src/devicetest/entities/devicetest.entity';

@Entity('certificate_device_test', { schema: 'public' })
export class CertificateDeviceTest {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  public id: string;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @ManyToOne(
    () => Certificates,
    (certificates) => certificates.certificateDeviceTests,
  )
  @JoinColumn([{ name: 'certificate_id', referencedColumnName: 'id' }])
  public certificate: Certificates;

  @ManyToOne(
    () => DeviceTest,
    (deviceTest) => deviceTest.certificateDeviceTests,
  )
  @JoinColumn([{ name: 'device_test_id', referencedColumnName: 'id' }])
  public deviceTest: DeviceTest;
}
