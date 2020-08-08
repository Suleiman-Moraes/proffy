const { resolve } = require('path');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: resolve(__dirname, 'src', 'database', 'db.sqlite')
    },
    migrations: {
      directory: resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true,
  },

};