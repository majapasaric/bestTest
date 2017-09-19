'use strict';
module.exports = (sequelize, DataTypes)=> {
  const AnswerImage = sequelize.define('AnswerImage', {
    image: DataTypes.BLOB
  }, {
    classMethods: {
      associate: (models)=> {
        // associations can be defined here
      }
    }
  });
  return AnswerImage;
};