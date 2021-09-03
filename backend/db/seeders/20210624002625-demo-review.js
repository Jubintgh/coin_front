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
        userId: 2,
        productId: 2,
        review: 'The list is pretty extensive, well done.'
      },
      {
        userId: 3,
        productId: 3,
        review: 'This is fantastic. You\'ve got things on there that most people don\'t realise are around. Instead of just going over the same things that are currently in the limelight. Thank you'
      },
      {
        userId: 4,
        productId: 4,
        review: 'Great For Developers , Nice .'
      },
      {
        userId: 5,
        productId: 2,
        review: 'Thank you that really helps me for my project.'
      },
      {
        userId: 6,
        productId: 3,
        review: 'Great For Developers , Nice .'
      },
      {
        userId: 7,
        productId: 3,
        review: 'cool'
      },
      {
        userId: 8,
        productId: 2,
        review: 'Love small simple tools like that!'
      },
      {
        userId: 9,
        productId: 2,
        review: 'aamazing'
      },
      {
        userId: 10,
        productId: 3,
        review: 'very nice'
      },
      {
        userId: 11,
        productId: 1,
        review: 'very nice'
      },
      {
        userId: 10,
        productId: 1,
        review: 'I like this product'
      },
      {
        userId: 11,
        productId: 1,
        review: 'Haha!! This community is great \n  The Idea and the product both looks amazing'
      },
      {
        userId: 2,
        productId: 5,
        review: 'hey everyone this is the fastest way to generate, highly customisable yet stunning mockups for your ebooks and other files. Perfect for your PH/gumroad launches.'
      },
      {
        userId: 3,
        productId: 3,
        review: 'The description looks amazing. Gonna test it now!'
      },
      {
        userId: 5,
        productId: 5,
        review: 'Please share where you end up using it '
      },
      {
        userId: 2,
        productId: 2,
        review: 'Amazing product!'
      },
      {
        userId: 6,
        productId: 1,
        review: 'Great opportunity'
      },
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
