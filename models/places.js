'use strict';
module.exports = (sequelize, DataTypes) => {
  const places = sequelize.define('places', {
    regions_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lon: DataTypes.FLOAT,
    headline: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    underscored: true,
  });
  places.associate = function(models) {
    // associations can be defined here
  };
  return places;
};