import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { DeviceTest } from 'src/devicetest/entities/devicetest.entity';
import { Parameters } from 'src/parameters/entities/parameter.entity';
import { PhoneTests } from 'src/phonetests/entities/phonetest.entity';
import { PlatformTest } from 'src/platformtest/entities/platformtest.entity';
import { ProductTests } from 'src/producttests/entities/producttest.entity';

@Entity('tests', { schema: 'public' })
export class Tests {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('character varying', { name: 'name', length: 255 })
  public name: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @Column('integer', { name: 'free', default: () => '0' })
  public free: number;

  @OneToMany(() => DeviceTest, (deviceTest) => deviceTest.test)
  public deviceTests: DeviceTest[];

  @OneToMany(() => Parameters, (parameters) => parameters.test)
  public parameters: Parameters[];

  @OneToMany(() => PhoneTests, (phoneTests) => phoneTests.test)
  public phoneTests: PhoneTests[];

  @OneToMany(() => PlatformTest, (platformTest) => platformTest.test)
  public platformTests: PlatformTest[];

  @OneToMany(() => ProductTests, (productTests) => productTests.test)
  public productTests: ProductTests[];
}
