'use strict';
module.exports = function (sequelize, DataTypes) {
    var Assessment = sequelize.define('Assessment', {
        assessment: DataTypes.FLOAT,
        truant: DataTypes.BOOLEAN,
        lecture: DataTypes.BOOLEAN,
        student: {
            type: DataTypes.TEXT,
            references: {
                model: 'Students',
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
    return Assessment;
};