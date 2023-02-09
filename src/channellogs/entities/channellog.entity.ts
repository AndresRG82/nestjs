import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('channel_logs', { schema: 'public' })
export class ChannelLogs {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  public id: string;

  @Column('character varying', { name: 'origin', length: 255 })
  public origin: string;

  @Column('character varying', { name: 'destination', length: 255 })
  public destination: string;

  @Column('character varying', { name: 'company_id', length: 255 })
  public companyId: string;

  @Column('character varying', { name: 'channel_url', length: 255 })
  public channelUrl: string;

  @Column('character varying', { name: 'channel_Client_secret', length: 255 })
  public channelClientSecret: string;

  @Column('character varying', { name: 'channel_client_id', length: 255 })
  public channelClientId: string;

  @Column('character varying', { name: 'status', length: 255 })
  public status: string;

  @Column('text', { name: 'response' })
  public response: string;

  @Column('text', { name: 'request' })
  public request: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  public createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  public updatedAt: Date | null;
}
