import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { DeviceTest } from 'src/devicetest/entities/devicetest.entity';
import { ProductsDevice } from 'src/productsdevice/entities/productsdevice.entity';

@Entity('product_device_screen_tests', { schema: 'public' })
export class ProductDeviceScreenTests {
  @Column('uuid', { primary: true, name: 'id' })
  public id: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @ManyToOne(
    () => DeviceTest,
    (deviceTest) => deviceTest.productDeviceScreenTests,
  )
  @JoinColumn([{ name: 'device_test_id', referencedColumnName: 'id' }])
  public deviceTest: DeviceTest;

  @ManyToOne(
    () => ProductsDevice,
    (productsDevice) => productsDevice.productDeviceScreenTests,
  )
  @JoinColumn([{ name: 'product_device_id', referencedColumnName: 'id' }])
  public productDevice: ProductsDevice;
}
