'use strict';
module.exports = (sequelize, DataTypes) => {
  const photos = sequelize.define('photos', {
    places_id: DataTypes.INTEGER,
    path: DataTypes.STRING
  }, {
    underscored: true,
  });
  const places = sequelize.define('places');
  places.hasMany(photos, {foreignKey: 'places_id', sourceKey: 'id'});
  photos.belongsTo(places, {foreignKey: 'places_id', sourceKey: 'id'});
  //主キー(targetKey)：places　外部キー(foreignKey)photos

  photos.associate = function(models) {
    // associations can be defined here
  };
  return photos;
};
