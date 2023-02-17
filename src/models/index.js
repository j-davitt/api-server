'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food');
const clothes = require('./clothes');
const Collection = require('./collection');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory' : process.env.DATABASE_URL;

const sequelizeDB = new Sequelize(DATABASE_URL);

const foodModel = food(sequelizeDB, DataTypes);
const clothesModel = clothes(sequelizeDB, DataTypes);

module.exports = {
  sequelizeDB,
  foodCollection: new Collection(foodModel),
  clothesCollection: new Collection(clothesModel),
};
