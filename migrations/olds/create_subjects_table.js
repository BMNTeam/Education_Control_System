var Sequalize = require('sequelize');

module.exports = {
    up: (queryInterface, Sequalize) => {
        queryInterface.createTable(
            'Subjects',
            {
                id: {
                    type: Sequalize.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                createdAt: {
                    type: Sequalize.DATE
                },
                updatedAt: {
                    type: Sequalize.DATE
                },
                subjectName: Sequalize.STRING

            }
        )
    },

    down: (queryInterface, Sequalize) => {

    }

};