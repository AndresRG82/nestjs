import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('currencies_pkey', ['id'], { unique: true })
@Entity('currencies', { schema: 'public' })
export class Currencies {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  public id: string;

  @Column('character varying', { name: 'symbol', length: 255 })
  public symbol: string;

  @Column('character varying', { name: 'name', length: 255 })
  public name: string;

  @Column('character varying', { name: 'symbol_native', length: 255 })
  public symbolNative: string;

  @Column('integer', { name: 'decimal_digits' })
  public decimalDigits: number;

  @Column('double precision', { name: 'rounding', precision: 53 })
  public rounding: number;

  @Column('character varying', { name: 'code', length: 255 })
  public code: string;

  @Column('character varying', { name: 'name_plural', length: 255 })
  public namePlural: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;
}
