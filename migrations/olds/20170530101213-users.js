'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable('Users',
            {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true
                },
                createdAt: Sequelize.DATE,
                updatedAt: Sequelize.DATE,
                subject: {
                    type: Sequelize.STRING,
                    references: {
                        model: 'Subjects',
                        key: 'id'
                    },
                    onUpdate: 'cascade',
                    onDelete: 'cascade'
                },
                role: Sequelize.TEXT,
                pwd:  Sequelize.TEXT,
                rememberMeToken: Sequelize.TEXT

            }
        )
    },

  down: function (queryInterface, Sequelize) {
      queryInterface.dropTable('Users');
  }
};
