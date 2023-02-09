import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { GroupPhones } from 'src/groupphones/entities/groupphone.entity';
import { Products } from 'src/products/entities/product.entity';

@Entity('groups', { schema: 'public' })
export class Groups {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('character varying', { name: 'name', length: 255 })
  public name: string;

  @Column('numeric', { name: 'price', precision: 10, scale: 2 })
  public price: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @OneToMany(() => GroupPhones, (groupPhones) => groupPhones.group)
  public groupPhones: GroupPhones[];

  @ManyToOne(() => Products, (products) => products.groups, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  public product: Products;
}
