'use strict';

require('dotenv').config();

const { start } = require('./src/server');

const { sequelizeDB } = require('./src/models');

sequelizeDB.sync().then(() => {
  console.log('Database is connected');
  start();
})
  .catch(e => console.error(e));

