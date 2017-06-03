'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Validations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
      balls: {
        type: Sequelize.FLOAT
      },
      truant: {
        type: Sequelize.FLOAT
      },
      assessment: {
        type: Sequelize.FLOAT
      },
      month: {
        type: Sequelize.STRING
      },
      assessmentNumber: {
        type: Sequelize.STRING
      },
      teacher: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Validations');
  }
};