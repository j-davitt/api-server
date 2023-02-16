'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food');
const clothes = require('./clothes');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

const sequelizeDB = new Sequelize(DATABASE_URL);

const foodModel = food(sequelizeDB, DataTypes);
const clothesModel = clothes(sequelizeDB, DataTypes);

module.exports = {
  sequelizeDB,
  foodModel,
  clothesModel,
};
