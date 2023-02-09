import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Phones } from 'src/phones/entities/phone.entity';
import { Tests } from 'src/tests/entities/test.entity';

@Entity('phone_tests', { schema: 'public' })
export class PhoneTests {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @ManyToOne(() => Phones, (phones) => phones.phoneTests)
  @JoinColumn([{ name: 'phone_id', referencedColumnName: 'id' }])
  public phone: Phones;

  @ManyToOne(() => Tests, (tests) => tests.phoneTests)
  @JoinColumn([{ name: 'test_id', referencedColumnName: 'id' }])
  public test: Tests;
}
