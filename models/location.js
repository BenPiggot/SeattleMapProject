'use strict';
module.exports = function(sequelize, DataTypes) {
  var location = sequelize.define('location', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    asset: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.location.belongsToMany(models.map, { through: models.mapslocations })
      }
    }
  });
  return location;
};