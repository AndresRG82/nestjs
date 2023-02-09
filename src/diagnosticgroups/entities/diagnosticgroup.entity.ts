import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DeviceTest } from 'src/devicetest/entities/devicetest.entity';
import { ProductsDevice } from 'src/productsdevice/entities/productsdevice.entity';

@Entity('diagnostic_groups', { schema: 'public' })
export class DiagnosticGroups {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  public id: string;

  @Column('character varying', {
    name: 'group_uuid',
    unique: true,
    length: 255,
  })
  public groupUuid: string;

  @Column('character varying', { name: 'trust_id', length: 255 })
  public trustId: string;

  @Column('integer', { name: 'status' })
  public status: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @OneToMany(() => DeviceTest, (deviceTest) => deviceTest.groupUu)
  public deviceTests: DeviceTest[];

  @OneToMany(() => ProductsDevice, (productsDevice) => productsDevice.groupUu)
  public productsDevices: ProductsDevice[];
}
