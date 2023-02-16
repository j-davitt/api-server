'use strict';

module.exports = (sequelizeDB, DataTypes) => {
  return sequelizeDB.define('clothes', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
