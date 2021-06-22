'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('Products', [
        {
          ownerId: 1,
          title: 'product3',
          imageUrl: 'https://tinyurl.com/2atemm9b',
          description: 'the third product'
        },
        {
          ownerId: 2,
          title: 'product4',
          imageUrl: 'https://tinyurl.com/rjxhz6rc',
          description: 'the fourth product'
        },
        {
          ownerId: 1,
          title: 'product5',
          imageUrl: 'https://tinyurl.com/vfbj9cfc',
          description: 'the fifth product'
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
