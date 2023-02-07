import { Column, Entity, Index } from 'typeorm';

@Index('password_resets_pk', ['email'], { unique: true })
@Index('password_resets_email_index', ['email'], {})
@Entity('password_resets', { schema: 'public' })
export class PasswordResets {
  @Column('character varying', { primary: true, name: 'email', length: 255 })
  public email: string;

  @Column('character varying', { name: 'token', length: 255 })
  public token: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;
}
