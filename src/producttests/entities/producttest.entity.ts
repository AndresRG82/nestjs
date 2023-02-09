import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Products } from 'src/products/entities/product.entity';
import { Tests } from 'src/tests/entities/test.entity';

@Entity('product_tests', { schema: 'public' })
export class ProductTests {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @ManyToOne(() => Products, (products) => products.productTests, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'product_id', referencedColumnName: 'id' }])
  public product: Products;

  @ManyToOne(() => Tests, (tests) => tests.productTests)
  @JoinColumn([{ name: 'test_id', referencedColumnName: 'id' }])
  public test: Tests;
}
