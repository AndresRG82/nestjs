import { Configs } from 'src/config/entities/config.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { DiscountCodes } from 'src/discountcodes/entities/discountcode.entity';
import { Parameters } from 'src/parameters/entities/parameter.entity';
import { Products } from 'src/products/entities/product.entity';
import { Code } from 'src/codes/entities/code.entity';
import { User_group as Company_group } from 'src/admins/entities/user_group.entity';
import { Exclude } from 'class-transformer';

@Entity('companies', { schema: 'public' })
export class Companies {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  status: number;

  @Column('character varying', { name: 'name', length: 255 })
  name: string;

  @Column('character varying', { name: 'logo', length: 255 })
  logo: string;

  @Column('character varying', { name: 'primary', length: 255 })
  primary: string;

  @Column('character varying', { name: 'secondary', length: 255 })
  secondary: string;

  @Column('integer', { name: 'company_uid' })
  companyUid: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('character varying', {
    name: 'title_drop',
    nullable: true,
    length: 255,
  })
  titleDrop: string | null;

  @Column('character varying', {
    name: 'phone_number',
    length: 255,
    default: () => "'012345678'",
  })
  phoneNumber: string;

  @Column('character varying', {
    name: 'email_contact',
    length: 255,
    default: () => "'contact@contact.cl'",
  })
  emailContact: string;

  @Column('character varying', {
    name: 'whatsapp_contact',
    length: 255,
    default: () => "'+56012345678'",
  })
  whatsappContact: string;

  @Column('character varying', {
    name: 'second_logo',
    nullable: true,
    length: 255,
  })
  secondLogo: string | null;

  @Column('character varying', { name: 'web_url', nullable: true, length: 255 })
  webUrl: string | null;

  @Exclude()
  @Column({ type: 'varchar', length: 255, nullable: true })
  client_id: string;

  @Exclude()
  @Column({ type: 'varchar', length: 255, nullable: true })
  client_secret: string;

  @Exclude()
  @Column({ type: 'varchar', length: 255, nullable: true })
  grant_type: string;

  @OneToMany(() => Configs, (configs) => configs.company)
  configs: Configs[];

  @ManyToOne(() => Company_group, (group) => group.group_name)
  group: Company_group;

  @OneToMany(() => DiscountCodes, (discountCodes) => discountCodes.company)
  discountCodes: DiscountCodes[];

  @OneToMany(() => Parameters, (parameters) => parameters.company)
  parameters: Parameters[];

  @OneToMany(() => Products, (products) => products.company)
  products: Products[];

  @OneToMany(() => Code, (code) => code.company)
  codes: Code[];
}
