import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Platforms } from 'src/platforms/entities/platform.entity';
import { Tests } from 'src/tests/entities/test.entity';

@Entity('platform_test', { schema: 'public' })
export class PlatformTest {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @ManyToOne(() => Platforms, (platforms) => platforms.platformTests)
  @JoinColumn([{ name: 'platform_id', referencedColumnName: 'id' }])
  public platform: Platforms;

  @ManyToOne(() => Tests, (tests) => tests.platformTests)
  @JoinColumn([{ name: 'test_id', referencedColumnName: 'id' }])
  public test: Tests;
}
