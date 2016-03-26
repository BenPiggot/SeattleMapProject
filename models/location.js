var geocoder = require('geocoder');

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
    },
    hooks: {
      beforeCreate: function(location, options, fn) {
        geocoder.geocode(location, function(err, data) {
          if (err) return fn(err, null);
          location.latitude = data.results[0].geometry.location.lat;
          location.longitude = data.results[0].geometry.location.lng;
          fn(null, location);
        });
      }
    }
  });
  return location;
};