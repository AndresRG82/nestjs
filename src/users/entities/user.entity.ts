import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Devices } from 'src/devices/entities/device.entity';
import { DiscountCodes } from 'src/discountcodes/entities/discountcode.entity';
import { Discounts } from 'src/discounts/entities/discount.entity';

@Entity('users', { schema: 'public' })
export class Users {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column('character varying', { name: 'name', length: 255 })
  public name: string;

  @Column('character varying', {
    name: 'lastname',
    nullable: true,
    length: 255,
  })
  public lastname: string | null;

  @Column('character varying', { name: 'email', length: 255 })
  public email: string;

  @Column('date', { name: 'email_verified_at', nullable: true })
  public emailVerifiedAt: string | null;

  @Column('character varying', {
    name: 'password',
    nullable: true,
    length: 255,
  })
  public password: string | null;

  @Column('character varying', { name: 'rut', nullable: true, length: 255 })
  public rut: string | null;

  @Column('character varying', { name: 'avatar', nullable: true, length: 255 })
  public avatar: string | null;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  public status: number;

  @Column('character varying', {
    name: 'confirmation_token',
    nullable: true,
    length: 100,
  })
  public confirmationToken: string | null;

  @Column('character varying', {
    name: 'facebook_id',
    nullable: true,
    length: 255,
  })
  public facebookId: string | null;

  @Column('character varying', {
    name: 'google_id',
    nullable: true,
    length: 255,
  })
  public googleId: string | null;

  @Column('character varying', {
    name: 'remember_token',
    nullable: true,
    length: 100,
  })
  public rememberToken: string | null;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;

  @Column('character varying', {
    name: 'apple_id',
    nullable: true,
    length: 255,
  })
  public appleId: string | null;

  @OneToMany(() => Devices, (devices) => devices.user)
  public devices: Devices[];

  @OneToMany(() => DiscountCodes, (discountCodes) => discountCodes.user)
  public discountCodes: DiscountCodes[];

  @OneToMany(() => Discounts, (discounts) => discounts.user)
  public discounts: Discounts[];
}
