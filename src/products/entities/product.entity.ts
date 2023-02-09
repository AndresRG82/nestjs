import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Discounts } from 'src/discounts/entities/discount.entity';
import { Groups } from 'src/groups/entities/group.entity';
import { ProductPhone } from 'src/productphone/entities/productphone.entity';
import { ProductTests } from 'src/producttests/entities/producttest.entity';
import { Companies } from 'src/company/entities/companies.entity';
import { ProductsDevice } from 'src/productsdevice/entities/productsdevice.entity';

@Entity('products', { schema: 'public' })
export class Products {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('character varying', { name: 'name', length: 255 })
  public name: string;

  @Column('character varying', { name: 'price', nullable: true, length: 255 })
  public price: string | null;

  @Column('character varying', { name: 'icon', length: 255 })
  public icon: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @Column('character varying', {
    name: 'title_drop',
    nullable: true,
    length: 255,
  })
  public titleDrop: string | null;

  @Column('text', { name: 'description', nullable: true })
  public description: string | null;

  @Column('integer', { name: 'free', default: () => '0' })
  public free: number;

  @Column('character varying', { name: 'type', nullable: true, length: 255 })
  public type: string | null;

  @Column('integer', { name: 'group', default: () => '0' })
  public group: number;

  @Column('character varying', {
    name: 'currency',
    nullable: true,
    length: 255,
    default: () => "'CLP'",
  })
  public currency: string | null;

  @Column('integer', { name: 'month_number', default: () => '12' })
  public monthNumber: number;

  @Column('boolean', { name: 'show_month', default: () => 'true' })
  public showMonth: boolean;

  @Column('boolean', { name: 'is_decimal', default: () => 'false' })
  public isDecimal: boolean;

  @OneToMany(() => Discounts, (discounts) => discounts.product)
  public discounts: Discounts[];

  @OneToMany(() => Groups, (groups) => groups.product)
  public groups: Groups[];

  @OneToMany(() => ProductPhone, (productPhone) => productPhone.product)
  public productPhones: ProductPhone[];

  @OneToMany(() => ProductTests, (productTests) => productTests.product)
  public productTests: ProductTests[];

  @ManyToOne(() => Companies, (companies) => companies.products)
  @JoinColumn([{ name: 'company_id', referencedColumnName: 'id' }])
  public company: Companies;

  @OneToMany(() => ProductsDevice, (productsDevice) => productsDevice.product)
  public productsDevices: ProductsDevice[];
}
