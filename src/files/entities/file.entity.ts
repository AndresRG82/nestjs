import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('files', { schema: 'public' })
export class Files {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  public id: string;

  @Column('character varying', { name: 'name', nullable: true, length: 255 })
  public name: string | null;

  @Column('character varying', { name: 'path', nullable: true, length: 255 })
  public path: string | null;

  @Column('character varying', {
    name: 'trust_id',
    nullable: true,
    length: 255,
  })
  public trustId: string | null;

  @Column('character varying', {
    name: 'test_uuid',
    nullable: true,
    length: 255,
  })
  public testUuid: string | null;

  @Column('character varying', { name: 'url', nullable: true, length: 255 })
  public url: string | null;

  @Column('boolean', { name: 'match_test', default: () => 'false' })
  public matchTest: boolean;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;
}
