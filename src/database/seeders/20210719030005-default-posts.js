'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('blogposts', [{
      title: 'Title of my post',
      slug: 'title-of-my-post',
      content: 'Content of my first post. I think it is so good I will make it public aready',
      status: 'published',
      created_by: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Title of second my post',
      slug: 'title-of-second-my-post',
      content: 'Content of my second post. Now, with more expirience, I will not make it public direcly. Some improves are needed.',
      status: 'draft',
      created_by: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'First post',
      slug: 'first-post',
      content: 'Content here.',
      status: 'published',
      created_by: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('blogposts', null, {});
  }
};
