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
        productId: 1,
        review: 'Good job! Don\'t forget to update continously'
      },
      {
        userId: 1,
        productId: 2,
        review: 'The list is pretty extensive, well done.'
      },
      {
        userId: 2,
        productId: 3,
        review: 'This is fantastic. You\'ve got things on there that most people don\'t realise are around. Instead of just going over the same things that are currently in the limelight. Thank you'
      },
      {
        userId: 2,
        productId: 3,
        review: 'Great For Developers , Nice .'
      },
      {
        userId: 3,
        productId: 4,
        review: 'Thank you that really helps me for my project.'
      },
      {
        userId: 1,
        productId: 2,
        review: 'Great For Developers , Nice .'
      },
      {
        userId: 4,
        productId: 1,
        review: 'cool'
      },
      {
        userId: 2,
        productId: 4,
        review: 'Love small simple tools like that!'
      },
      {
        userId: 1,
        productId: 5,
        review: 'aamazing'
      },
      {
        userId: 2,
        productId: 2,
        review: 'very nice'
      },
      {
        userId: 3,
        productId: 1,
        review: 'very nice'
      },
      {
        userId: 1,
        productId: 3,
        review: 'I like this product'
      },
      {
        userId: 10,
        productId: 5,
        review: 'Haha!! This community is great \n  The Idea and the product both looks amazing'
      },
      {
        userId: 2,
        productId: 6,
        review: 'hey everyone this is the fastest way to generate, highly customisable yet stunning mockups for your ebooks and other files. Perfect for your PH/gumroad launches.'
      },
      {
        userId: 6,
        productId: 2,
        review: 'The description looks amazing. Gonna test it now!'
      },
      {
        userId: 1,
        productId: 2,
        review: 'Please share where you end up using it '
      },
      {
        userId: 3,
        productId: 2,
        review: 'Amazing product!'
      },
      {
        userId: 2,
        productId: 1,
        review: 'Great opportunity'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews', {
      // username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
