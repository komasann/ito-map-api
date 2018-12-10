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
  const regions = sequelize.define('regions');
  regions.hasMany(places, {foreignKey: 'regions_id', sourceKey: 'id'});
  places.belongsTo(regions, {foreignKey: 'regions_id', sourceKey: 'id'});
  //主キー(targetKey)：regions　外部キー(foreignKey)：places

  const photos = sequelize.define('photos');
  places.hasMany(photos, {foreignKey: 'places_id', sourceKey: 'id'});
  photos.belongsTo(places, {foreignKey: 'places_id', sourceKey: 'id'});
  //主キー(targetKey)：places　外部キー(foreignKey)photos

  places.associate = function(models) {
    // associations can be defined here
  };


  return places;
};
