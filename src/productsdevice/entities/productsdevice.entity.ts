import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductDeviceScreenTests } from 'src/productdevicescreentests/entities/productdevicescreentest.entity';
import { Products } from 'src/products/entities/product.entity';
import { DiagnosticGroups } from 'src/diagnosticgroups/entities/diagnosticgroup.entity';

@Index('assistances_device_pkey', ['id'], { unique: true })
@Entity('products_device', { schema: 'public' })
export class ProductsDevice {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('smallint', { name: 'state' })
  public state: number;

  @Column('character varying', { name: 'price', nullable: true, length: 255 })
  public price: string | null;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @Column('timestamp without time zone', {
    name: 'activated_at',
    nullable: true,
  })
  public activatedAt: Date | null;

  @Column('timestamp without time zone', { name: 'expires_at', nullable: true })
  public expiresAt: Date | null;

  @Column('timestamp without time zone', {
    name: 'disaster_at',
    nullable: true,
  })
  public disasterAt: Date | null;

  @Column('integer', { name: 'device_id', nullable: true })
  public deviceId: number | null;

  @Column('character varying', {
    name: 'last_transaction_id',
    nullable: true,
    length: 255,
  })
  public lastTransactionId: string | null;

  @Column('timestamp without time zone', {
    name: 'canceled_at',
    nullable: true,
  })
  public canceledAt: Date | null;

  @OneToMany(
    () => ProductDeviceScreenTests,
    (productDeviceScreenTests) => productDeviceScreenTests.productDevice,
  )
  public productDeviceScreenTests: ProductDeviceScreenTests[];

  @ManyToOne(() => Products, (products) => products.productsDevices, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  public product: Products;

  @ManyToOne(
    () => DiagnosticGroups,
    (diagnosticGroups) => diagnosticGroups.productsDevices,
  )
  @JoinColumn([{ name: 'group_uuid', referencedColumnName: 'groupUuid' }])
  public groupUu: DiagnosticGroups;
}
