'use strict';
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        subject: {
            type: DataTypes.STRING,
            references: {
                model: 'Subject',
                key: 'id'
            }
        },
        role: DataTypes.TEXT,
        pwd: DataTypes.TEXT,
        email: {
            type: DataTypes.TEXT,
            validate: {
                isEmail: true
            }
        },
        rememberToken: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
    return User;
};