'use strict';
module.exports = function(sequelize, DataTypes) {
  var map = sequelize.define('map', {
    topic: DataTypes.STRING,
    theme: DataTypes.TEXT,
    name: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return map;
};