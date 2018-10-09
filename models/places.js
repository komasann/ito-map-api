'use strict';
module.exports = (sequelize, DataTypes) => {
  const places = sequelize.define('places', {
    title: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lon: DataTypes.FLOAT,
    headline: DataTypes.STRING,
    point: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    underscored: true,
  });
  places.associate = function(models) {
    // associations can be defined here
  };
  return places;
};
