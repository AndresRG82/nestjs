import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column('decimal', {
    name: 'rounding',
    precision: 5,
    scale: 3,
    nullable: true,
  })
  public rounding: number | null;

  @Column('character varying', { name: 'code', length: 255 })
  public code: string;

  @Column('character varying', { name: 'name_plural', length: 255 })
  public namePlural: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;
}
