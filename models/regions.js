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
  return regions;
};