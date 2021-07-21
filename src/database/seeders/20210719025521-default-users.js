'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      username: 'whatacollusername',
      password_hash: 'plaintextmakesmesad',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'will',
      password_hash: 'anothercoolpass',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
