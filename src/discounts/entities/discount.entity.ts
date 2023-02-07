import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DeviceDiscount } from 'src/devicediscount/entities/devicediscount.entity';
import { DiscountCodes } from 'src/discountcodes/entities/discountcode.entity';
import { Products } from 'src/products/entities/product.entity';
import { Users } from 'src/users/entities/user.entity';

@Index('discounts_pkey', ['id'], { unique: true })
@Entity('discounts', { schema: 'public' })
export class Discounts {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('character varying', { name: 'name', length: 255 })
  public name: string;

  @Column('smallint', { name: 'type' })
  public type: number;

  @Column('integer', { name: 'value' })
  public value: number;

  @Column('smallint', { name: 'expires' })
  public expires: number;

  @Column('integer', { name: 'stock', nullable: true })
  public stock: number | null;

  @Column('date', { name: 'date', nullable: true })
  public date: string | null;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @OneToMany(() => DeviceDiscount, (deviceDiscount) => deviceDiscount.discount)
  public deviceDiscounts: DeviceDiscount[];

  @OneToMany(() => DiscountCodes, (discountCodes) => discountCodes.discount)
  public discountCodes: DiscountCodes[];

  @ManyToOne(() => Products, (products) => products.discounts, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  public product: Products;

  @ManyToOne(() => Users, (users) => users.discounts)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  public user: Users;
}
