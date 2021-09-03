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
        userId: 15,
        productId: 26,
        review: 'Good job! Don\'t forget to update continously'
      },
      {
        userId: 16,
        productId: 26,
        review: 'The list is pretty extensive, well done.'
      },
      {
        userId: 17,
        productId: 26,
        review: 'This is fantastic. You\'ve got things on there that most people don\'t realise are around. Instead of just going over the same things that are currently in the limelight. Thank you'
      },
      {
        userId: 17,
        productId: 26,
        review: 'Great For Developers , Nice .'
      },
      {
        userId: 18,
        productId: 26,
        review: 'Thank you that really helps me for my project.'
      },
      {
        userId: 19,
        productId: 27,
        review: 'Great For Developers , Nice .'
      },
      {
        userId: 20,
        productId: 27,
        review: 'cool'
      },
      {
        userId: 20,
        productId: 27,
        review: 'Love small simple tools like that!'
      },
      {
        userId: 15,
        productId: 27,
        review: 'aamazing'
      },
      {
        userId: 20,
        productId: 28,
        review: 'very nice'
      },
      {
        userId: 16,
        productId: 28,
        review: 'very nice'
      },
      {
        userId: 17,
        productId: 28,
        review: 'I like this product'
      },
      {
        userId: 18,
        productId: 29,
        review: 'Haha!! This community is great \n  The Idea and the product both looks amazing'
      },
      {
        userId: 19,
        productId: 29,
        review: 'hey everyone this is the fastest way to generate, highly customisable yet stunning mockups for your ebooks and other files. Perfect for your PH/gumroad launches.'
      },
      {
        userId: 23,
        productId: 30,
        review: 'The description looks amazing. Gonna test it now!'
      },
      {
        userId: 21,
        productId: 30,
        review: 'Please share where you end up using it '
      },
      {
        userId: 15,
        productId: 29,
        review: 'Amazing product!'
      },
      {
        userId: 21,
        productId: 30,
        review: 'Great opportunity'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews', {
    }, {});
  }
};
