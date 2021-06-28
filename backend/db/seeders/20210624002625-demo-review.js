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
        userId: 10,
        productId: 7,
        review: 'Good job! Don\'t forget to update continously'
      },
      {
        userId: 11,
        productId: 7,
        review: 'The list is pretty extensive, well done.'
      },
      {
        userId: 12,
        productId: 7,
        review: 'This is fantastic. You\'ve got things on there that most people don\'t realise are around. Instead of just going over the same things that are currently in the limelight. Thank you'
      },
      {
        userId: 9,
        productId: 8,
        review: 'Great For Developers , Nice .'
      },
      {
        userId: 15,
        productId: 8,
        review: 'Thank you that really helps me for my project.'
      },
      {
        userId: 14,
        productId: 8,
        review: 'Great For Developers , Nice .'
      },
      {
        userId: 13,
        productId: 8,
        review: 'cool'
      },
      {
        userId: 12,
        productId: 9,
        review: 'Love small simple tools like that!'
      },
      {
        userId: 9,
        productId: 9,
        review: 'aamazing'
      },
      {
        userId: 10,
        productId: 9,
        review: 'very nice'
      },
      {
        userId: 11,
        productId: 10,
        review: 'very nice'
      },
      {
        userId: 12,
        productId: 10,
        review: 'I like this product'
      },
      {
        userId: 13,
        productId: 10,
        review: 'Haha!! This community is great \n  The Idea and the product both looks amazing'
      },
      {
        userId: 14,
        productId: 10,
        review: 'hey everyone this is the fastest way to generate, highly customisable yet stunning mockups for your ebooks and other files. Perfect for your PH/gumroad launches.'
      },
      {
        userId: 15,
        productId: 11,
        review: 'The description looks amazing. Gonna test it now!'
      },
      {
        userId: 9,
        productId: 11,
        review: 'Please share where you end up using it '
      },
      {
        userId: 10,
        productId: 11,
        review: 'Amazing product!'
      },
      {
        userId: 11,
        productId: 11,
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
