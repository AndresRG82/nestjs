import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Companies } from 'src/company/entities/companies.entity';
import { Tests } from 'src/tests/entities/test.entity';

@Index('parameters_pkey', ['id'], { unique: true })
@Entity('parameters', { schema: 'public' })
export class Parameters {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('character varying', { name: 'name', length: 255 })
  public name: string;

  @Column('character varying', { name: 'value', length: 255 })
  public value: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @ManyToOne(() => Companies, (companies) => companies.parameters)
  @JoinColumn([{ name: 'company_id', referencedColumnName: 'id' }])
  public company: Companies;

  @ManyToOne(() => Tests, (tests) => tests.parameters)
  @JoinColumn([{ name: 'test_id', referencedColumnName: 'id' }])
  public test: Tests;
}
