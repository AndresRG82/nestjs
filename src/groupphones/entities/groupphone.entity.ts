import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Groups } from 'src/groups/entities/group.entity';
import { Phones } from 'src/phones/entities/phone.entity';

@Entity('group_phones', { schema: 'public' })
export class GroupPhones {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  public id: number;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @Column('character varying', {
    name: 'fantasy_name',
    nullable: true,
    length: 255,
  })
  public fantasyName: string | null;

  @Column('character varying', {
    name: 'capacity',
    nullable: true,
    length: 255,
  })
  public capacity: string | null;

  @ManyToOne(() => Groups, (groups) => groups.groupPhones, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'group_id', referencedColumnName: 'id' }])
  public group: Groups;

  @ManyToOne(() => Phones, (phones) => phones.groupPhones)
  @JoinColumn([{ name: 'phone_id', referencedColumnName: 'id' }])
  public phone: Phones;
}
