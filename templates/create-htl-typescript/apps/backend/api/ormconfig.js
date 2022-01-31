require('dotenv-defaults/config');

const { resolvePath, makeJoinPath } = require('@sima/utils');

const extensions = ['js', 'ts'];
const isBuildFolder = process.env.NODE_ENV === 'production';
const sourceFolder = isBuildFolder ? 'build' : 'src';

const joinPath = makeJoinPath(
  resolvePath(__dirname, sourceFolder, 'core', 'database'),
);

const extensionsPath = (...paths) =>
  extensions.map(extension => joinPath(...paths, `*.${extension}`));

module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  synchronize: false,
  database: process.env.MYSQL_DATABASE,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD || '',
  entities: extensionsPath('models'),
  migrations: extensionsPath('migrations'),
  cli: {
    migrationsDir: 'src/core/database/migrations',
  },
};
