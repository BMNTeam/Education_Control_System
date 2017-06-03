'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable('Directions',
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE,
                directionName: Sequelize.STRING

            })
    },

  down: function (queryInterface, Sequelize) {
      queryInterface.dropTable('Directions')
  }
};
