'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable('Assessments', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true

            },
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
            assessment: Sequelize.FLOAT,
            truant: Sequelize.BOOLEAN,
            lecture: Sequelize.BOOLEAN,
            student: {
                type: Sequelize.TEXT,
                references: {
                    model: 'Students',
                    key: 'id'
                }
            }

        })
    },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
