import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { CertificateDeviceTest } from 'src/certificatedevicetest/entities/certificatedevicetest.entity';
import { Devices } from 'src/devices/entities/device.entity';
import { Tests } from 'src/tests/entities/test.entity';
import { DiagnosticGroups } from 'src/diagnosticgroups/entities/diagnosticgroup.entity';
import { ProductDeviceScreenTests } from 'src/productdevicescreentests/entities/productdevicescreentest.entity';

@Index('device_test_pkey', ['id'], { unique: true })
@Entity('device_test', { schema: 'public' })
export class DeviceTest {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('integer', { name: 'state' })
  public state: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @Column('boolean', { name: 'approved', nullable: true })
  public approved: boolean | null;

  @Column('character varying', {
    name: 'test_uuid',
    nullable: true,
    length: 255,
  })
  public testUuid: string | null;

  @Column('character varying', {
    name: 'operator_email',
    nullable: true,
    length: 255,
  })
  public operatorEmail: string | null;

  @Column('character varying', {
    name: 'score_screen_test',
    nullable: true,
    length: 255,
  })
  public scoreScreenTest: string | null;

  @Column('character varying', {
    name: 'tolerancy_screen_test',
    nullable: true,
    length: 255,
  })
  public tolerancyScreenTest: string | null;

  @Column('character varying', {
    name: 'url_screen_test',
    nullable: true,
    length: 255,
  })
  public urlScreenTest: string | null;

  @OneToMany(
    () => CertificateDeviceTest,
    (certificateDeviceTest) => certificateDeviceTest.deviceTest,
  )
  public certificateDeviceTests: CertificateDeviceTest[];

  @ManyToOne(() => Devices, (devices) => devices.deviceTests)
  @JoinColumn([{ name: 'device_id', referencedColumnName: 'id' }])
  public device: Devices;

  @ManyToOne(() => Tests, (tests) => tests.deviceTests)
  @JoinColumn([{ name: 'test_id', referencedColumnName: 'id' }])
  public test: Tests;

  @ManyToOne(
    () => DiagnosticGroups,
    (diagnosticGroups) => diagnosticGroups.deviceTests,
  )
  @JoinColumn([{ name: 'group_uuid', referencedColumnName: 'groupUuid' }])
  public groupUu: DiagnosticGroups;

  @OneToMany(
    () => ProductDeviceScreenTests,
    (productDeviceScreenTests) => productDeviceScreenTests.deviceTest,
  )
  public productDeviceScreenTests: ProductDeviceScreenTests[];
}
