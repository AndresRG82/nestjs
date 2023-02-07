import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { GroupPhones } from 'src/groupphones/entities/groupphone.entity';
import { Models } from 'src/models/entities/model.entity';
import { PhoneTests } from 'src/phonetests/entities/phonetest.entity';
import { Brands } from 'src/brands/entities/brand.entity';
import { ProductPhone } from 'src/productphone/entities/productphone.entity';

@Index('phones_pkey', ['id'], { unique: true })
@Entity('phones', { schema: 'public' })
export class Phones {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('character varying', { name: 'name', length: 255 })
  public name: string;

  @Column('integer', { name: 'status', default: () => '1' })
  public status: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @OneToMany(() => GroupPhones, (groupPhones) => groupPhones.phone)
  public groupPhones: GroupPhones[];

  @OneToMany(() => Models, (models) => models.phone)
  public models: Models[];

  @OneToMany(() => PhoneTests, (phoneTests) => phoneTests.phone)
  public phoneTests: PhoneTests[];

  @ManyToOne(() => Brands, (brands) => brands.phones)
  @JoinColumn([{ name: 'brand_id', referencedColumnName: 'id' }])
  public brand: Brands;

  @OneToMany(() => ProductPhone, (productPhone) => productPhone.phone)
  public productPhones: ProductPhone[];
}
