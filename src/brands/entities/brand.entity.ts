import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Phones } from 'src/phones/entities/phone.entity';

@Entity('brands', { schema: 'public' })
export class Brands {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('character varying', { name: 'name', length: 255 })
  public name: string;

  @Column('character varying', { name: 'logo', nullable: true, length: 255 })
  public logo: string | null;

  @Column('integer', { name: 'status', default: () => '1' })
  public status: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @OneToMany(() => Phones, (phones) => phones.brand)
  public phones: Phones[];
}
