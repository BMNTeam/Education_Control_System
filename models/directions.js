'use strict';
module.exports = function(sequelize, DataTypes) {
  var Directions = sequelize.define('Directions', {
    directionName: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Directions;
};