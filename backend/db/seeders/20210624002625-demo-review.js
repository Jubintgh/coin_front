'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        productId: 2,
        review: 'wow'
      },
      {
        userId: 2,
        productId: 2,
        review: 'amazing'
      },
      {
        userId: 3,
        productId: 2,
        review: 'aamazing'
      },
      {
        userId: 3,
        productId: 2,
        review: 'very nice'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
