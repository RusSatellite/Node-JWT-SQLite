const path = require('path');

module.exports = {
  test: {
    username: 'root',
    password: 'root',
    storage: path.join(__dirname, '..', 'database_test.sqlite'),
    host: 'localhost',
    dialect: 'sqlite',
    logging: console.log
  }
};