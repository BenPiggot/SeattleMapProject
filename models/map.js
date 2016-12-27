'use strict';

var geocoder = require('node-geocoder');

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
        models.map.belongsToMany(models.location, { through: models.mapslocations })
      }
    },
    hooks: {
      beforeCreate: function(map, options, fn) {
        geocoder.geocode(map, function(err, data) {
          if (err) return fn(err, null);
          map.latitude = data.results[0].geometry.map.lat;
          map.longitude = data.results[0].geometry.map.lng;
          fn(null, map;
        });
      }
    }
  });
  return map;
};