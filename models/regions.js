'use strict';
module.exports = (sequelize, DataTypes) => {
  const regions = sequelize.define('regions', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  regions.associate = function(models) {
    // associations can be defined here
  };

  const places =  sequelize.define('places');
  regions.hasMany(places, {foreignKey: 'regions_id', sourceKey: 'id'});
  places.belongsTo(regions, {foreignKey: 'regions_id', sourceKey: 'id'});
  //主キー：regions　外部キー：places

  return regions;
};
