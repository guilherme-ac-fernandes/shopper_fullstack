module.exports = {
  all: true,
  extends: "@istanbuljs/nyc-config-typescript",
  exclude: [
    'src/tests',
    'src/database/config',
    'src/database/migrations',
    'src/database/seeders',
    'src/api',
    'src/models',
  ],
  include: ['src/**/*.ts']
};