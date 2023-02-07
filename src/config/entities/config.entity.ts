import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Companies } from 'src/company/entities/companies.entity';
import { Transactions } from 'src/transactions/entities/transaction.entity';

@Index('configs_pkey', ['id'], { unique: true })
@Entity('configs', { schema: 'public' })
export class Configs {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
  id: string;

  @Column('smallint', { name: 'status', default: () => "'1'" })
  status: number;

  @Column('character varying', { name: 'name', length: 255 })
  name: string;

  @Column('character varying', { name: 'type', length: 255 })
  type: string;

  @Column('character varying', { name: 'url', length: 255 })
  url: string;

  @Column('timestamp without time zone', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp without time zone', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('character varying', { name: 'tos_url', nullable: true, length: 255 })
  tosUrl: string | null;

  @Column('integer', {
    name: 'tos_version',
    nullable: true,
    default: () => '1',
  })
  tosVersion: number | null;

  @Column('character varying', {
    name: 'callback',
    length: 255,
    default: () => "'coverme.lat://pay.id'",
  })
  callback: string;

  @Column('character varying', {
    name: 'chat_url',
    nullable: true,
    length: 255,
  })
  chatUrl: string | null;

  @Column('boolean', { name: 'deferred', default: () => 'false' })
  deferred: boolean;

  @Column('character varying', {
    name: 'channel_url',
    nullable: true,
    length: 255,
  })
  channelUrl: string | null;

  @Column('character varying', {
    name: 'channel_client_id',
    nullable: true,
    length: 255,
  })
  channelClientId: string | null;

  @Column('character varying', {
    name: 'channel_Client_secret',
    nullable: true,
    length: 255,
  })
  channelClientSecret: string | null;

  @Column('integer', { name: 'group_test_time', default: () => '60' })
  groupTestTime: number;

  @Column('json', {
    name: 'custom_msj',
    default: [
      'Tienes una asistencia disponible para comprar',
      '\u00bfDeseas adquirir la asistencia?',
    ],
  })
  customMsj: object;

  @Column('character varying', {
    name: 'delete_msj',
    length: 255,
    default: () =>
      "'Se realizará un borrado de su Cuenta y todos los datos almacenados. Esta acción no es reversible.'",
  })
  deleteMsj: string;

  @Column('character varying', {
    name: 'dec_point',
    length: 255,
    default: () => "'.'",
  })
  decPoint: string;

  @Column('character varying', {
    name: 'thousands_sep',
    length: 255,
    default: () => "','",
  })
  thousandsSep: string;

  @Column('character varying', {
    name: 'screen_warning_msg',
    length: 255,
    default: () =>
      "'La imagen obtenida de esta prueba, puede ser utilizada para validar el estado original del equipo al momento de solicitar la prestación del servicio'",
  })
  screenWarningMsg: string;

  @Column('boolean', { name: 'show_screen_warning', default: () => 'false' })
  showScreenWarning: boolean;

  @Column('character varying', {
    name: 'screen_test_endpoint',
    length: 255,
    default: () =>
      "'https://2qkfg0mp9j.execute-api.us-east-1.amazonaws.com/default/'",
  })
  screenTestEndpoint: string;

  @Column('boolean', { name: 'advanced_screen_test', default: () => 'false' })
  advancedScreenTest: boolean;

  @Column('boolean', { name: 'hide_optional_tests', default: () => 'false' })
  hideOptionalTests: boolean;

  @Column('boolean', { name: 'only_test', default: () => 'false' })
  onlyTest: boolean;

  @Column('character varying', {
    name: 'redirect_text_button',
    nullable: true,
    length: 255,
  })
  redirectTextButton: string | null;

  @Column('character varying', {
    name: 'redirect_url',
    nullable: true,
    length: 255,
  })
  redirectUrl: string | null;

  @Column('boolean', { name: 'show_video_tutorial', default: () => 'false' })
  showVideoTutorial: boolean;

  @Column('character varying', {
    name: 'tutorial_url',
    length: 255,
    default: () => "'https://www.youtube.com/'",
  })
  tutorialUrl: string;

  @Column('boolean', { name: 'show_email_text', default: () => 'false' })
  showEmailText: boolean;

  @Column('character varying', {
    name: 'screen_email_text',
    length: 255,
    default: () =>
      "'Si no puedes aprobar este test, por favor envíanos un email con la foto de la pantalla de tu celular.'",
  })
  screenEmailText: string;

  @Column('character varying', {
    name: 'screen_email',
    length: 255,
    default: () => "'foto@empresa.com'",
  })
  screenEmail: string;

  @Column('integer', { name: 'screen_try', default: () => '2' })
  screenTry: number;

  @Column('boolean', { name: 'screen_shot_imei', default: () => 'false' })
  screenShotImei: boolean;

  @Column('boolean', { name: 'apple_login', default: () => 'true' })
  appleLogin: boolean;

  @Column('boolean', { name: 'certificate_view', default: () => 'true' })
  certificateView: boolean;

  @ManyToOne(() => Companies, (companies) => companies.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'company_id', referencedColumnName: 'id' }])
  public company: Companies;

  @OneToMany(() => Transactions, (transactions) => transactions.config)
  transactions: Transactions[];
}
