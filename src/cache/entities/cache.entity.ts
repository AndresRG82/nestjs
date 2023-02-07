import { Column, Entity, Index } from 'typeorm';

@Index('cache_pk', ['key'], { unique: true })
@Index('cache_key_unique', ['key'], { unique: true })
@Entity('cache', { schema: 'public' })
export class Cache {
  @Column('character varying', { primary: true, name: 'key', length: 255 })
  public key: string;

  @Column('text', { name: 'value' })
  public value: string;

  @Column('integer', { name: 'expiration' })
  public expiration: number;
}
