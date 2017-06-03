'use strict';
module.exports = function (sequelize, DataTypes) {
    var Validation = sequelize.define('Validation', {
        student: DataTypes.STRING,
        subject: {
            type: DataTypes.STRING,
            references: {
                model: 'Subject',
                key: 'id'
            }
        },
        balls: DataTypes.FLOAT,
        truant: DataTypes.FLOAT,
        assessment: DataTypes.FLOAT,
        month: DataTypes.STRING,
        assessmentNumber: DataTypes.STRING,
        teacher: {
            type: DataTypes.STRING,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return Validation;
};