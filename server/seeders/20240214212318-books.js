'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('books', [
      {
        name: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        year_published: 1937
      },
      {
        name: 'The Farting Hobbit',
        author: 'D.R.F. Tolkien',
        year_published: 1955
      },
      {
        name: 'The Farting Hobbit 2: OMFG',
        author: 'D.R.F. Tolkien II',
        year_published: 1956
      },
      {
        name: 'The Farting Hobbit 3: Fartpocalypse',
        author: 'D.R.F. Tolkien III',
        year_published: 1957
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
