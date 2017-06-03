'use strict';
module.exports = function (sequelize, DataTypes) {
    var Subject = sequelize.define('Subject', {
        subjectName: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
                Subject.belongsTo(models.Assessment, {
                    onDelete: 'CASCADE',
                    foreignKey: {
                        allowNull: false
                    }
                })
            }
        }
    });
    return Subject;
};