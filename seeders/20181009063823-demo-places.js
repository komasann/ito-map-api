'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('places', [
      {
        title: '',
        lat: 0.0,
        lon: 0.0,
        headline: '',
        description: '',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('places', null, {});
  }
};
