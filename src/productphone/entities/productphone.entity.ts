import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Phones } from 'src/phones/entities/phone.entity';
import { Products } from 'src/products/entities/product.entity';

@Index('assistances_phone_pkey', ['id'], { unique: true })
@Entity('product_phone', { schema: 'public' })
export class ProductPhone {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @ManyToOne(() => Phones, (phones) => phones.productPhones)
  @JoinColumn([{ name: 'phone_id', referencedColumnName: 'id' }])
  public phone: Phones;

  @ManyToOne(() => Products, (products) => products.productPhones, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  public product: Products;
}
