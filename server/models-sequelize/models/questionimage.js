'use strict';
module.exports = (sequelize, DataTypes)=> {
  const QuestionImage = sequelize.define('QuestionImage', {
    image: DataTypes.BLOB
  }, {
    classMethods: {
      associate: (models)=> {
        // associations can be defined here
      }
    }
  });
  return QuestionImage;
};