import { Column, Entity } from 'typeorm';

@Entity('password_resets', { schema: 'public' })
export class PasswordResets {
  @Column('character varying', { primary: true, name: 'email', length: 255 })
  public email: string;

  @Column('character varying', { name: 'token', length: 255 })
  public token: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;
}
