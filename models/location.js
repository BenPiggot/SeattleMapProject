'use strict';

var geocoder = require('geocoder')

module.exports = function(sequelize, DataTypes) {
  var location = sequelize.define('location', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.TEXT,
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
        console.log(location)
        var locator = location.address !== '' ? location.address : location.name;
        geocoder.geocode(locator, function(err, data) {
          console.log(data)
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