'use strict';

module.exports = (sequelizeDB, DataTypes) => {
  return sequelizeDB.define('food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

