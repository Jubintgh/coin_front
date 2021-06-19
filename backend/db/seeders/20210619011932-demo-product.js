'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Products', [{
        ownerId: 1,
        title: "Best Product",
        imageUrl: "https://miro.medium.com/max/1024/1*JRL63doLDR12SxCzZMqjLw.png",
        description: "its really amazing you should try, best in the industry"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Products', null, {});
  }
};
