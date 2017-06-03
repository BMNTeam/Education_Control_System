'use strict';
module.exports = function (sequelize, DataTypes) {
    var Students = sequelize.define('Students', {
        course: DataTypes.INTEGER,
        group: DataTypes.INTEGER,
        direction: {
            type: DataTypes.TEXT,
            references: {
                model: 'Directions',
                key: 'id'
            }
        }
    }, {
        classMethods: {
            associate: function (models) {
               Students.hasOne(models.Assessment,{
                   onDelete: "CASCADE",
                   foreignKey: {
                       allowNull: false
                   }
               });

            }
        }
    });
    return Students;
};