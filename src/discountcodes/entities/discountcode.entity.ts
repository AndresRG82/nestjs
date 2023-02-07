import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Companies } from 'src/company/entities/companies.entity';
import { Discounts } from 'src/discounts/entities/discount.entity';
import { Users } from 'src/users/entities/user.entity';

@Index('discount_codes_code_unique', ['code'], { unique: true })
@Index('discount_codes_pkey', ['id'], { unique: true })
@Entity('discount_codes', { schema: 'public' })
export class DiscountCodes {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  public id: string;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('character varying', { name: 'code', unique: true, length: 255 })
  public code: string;

  @Column('integer', { name: 'times_used' })
  public timesUsed: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @ManyToOne(() => Companies, (companies) => companies.discountCodes)
  @JoinColumn([{ name: 'company_id', referencedColumnName: 'id' }])
  public company: Companies;

  @ManyToOne(() => Discounts, (discounts) => discounts.discountCodes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'discount_id', referencedColumnName: 'id' }])
  public discount: Discounts;

  @ManyToOne(() => Users, (users) => users.discountCodes)
  @JoinColumn([{ name: 'user_id', referencedColumnName: 'id' }])
  public user: Users;
}
