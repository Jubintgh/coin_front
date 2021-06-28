'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        profilePicUrl: './dummy-data/d-user/user1'
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profilePicUrl:'./dummy-data/d-user/user2'
      },
      {
        email: faker.internet.email(),
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profilePicUrl:'./dummy-data/d-user/user3'
      },
      {
        email: faker.internet.email(),
        username: 'someguy',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profilePicUrl:'./dummy-data/d-user/user4'
      },
      {
        email: faker.internet.email(),
        username: 'theguy',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profilePicUrl: './dummy-data/d-user/user5'
      },
      {
        email: faker.internet.email(),
        username: 'anotherguy',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profilePicUrl: './dummy-data/d-user/user6'
      },
      {
        email: faker.internet.email(),
        username: 'thisguy',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        profilePicUrl: './dummy-data/d-user/user7'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      // username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};