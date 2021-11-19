import { ConnectionOptions } from 'typeorm';

const info: ConnectionOptions = {
  type: 'mysql',
  host: 'allmyworkdb',
  port: 3306,
  username: 'root',
  password: 'allmyworkpwd',
  database: 'allmywork',
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
};

export default info;
