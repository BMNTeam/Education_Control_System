'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable('Students',
            {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                course: Sequelize.INTEGER,
                group: Sequelize.INTEGER,
                direction: {
                    type: Sequelize.TEXT,
                    references: {
                        x: 'Directions',
                        key: 'id'
                    }
                }
            }
        )
    },

  down: function (queryInterface, Sequelize) {
      queryInterface.dropTable('Students')
  }
};
