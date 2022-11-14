import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      host: process.env.PG_HOST,
      db_name: process.env.PG_DBNAME,
      port: parseInt(process.env.PG_PORT, 10),
    },
    jwtSecret: process.env.JWT_SECRET,
  };
});
