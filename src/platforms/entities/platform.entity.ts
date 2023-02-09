import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PlatformTest } from 'src/platformtest/entities/platformtest.entity';

@Entity('platforms', { schema: 'public' })
export class Platforms {
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

  @OneToMany(() => PlatformTest, (platformTest) => platformTest.platform)
  public platformTests: PlatformTest[];
}
