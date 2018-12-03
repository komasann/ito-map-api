'use strict';
module.exports = (sequelize, DataTypes) => {
  const photos = sequelize.define('photos', {
    places_id: DataTypes.INTEGER,
    path: DataTypes.STRING
  }, {
    underscored: true,
  });
  photos.associate = function(models) {
    // associations can be defined here
  };
  return photos;
};