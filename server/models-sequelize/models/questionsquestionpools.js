'use strict';
module.exports = (sequelize, DataTypes)=> {
  const QuestionsQuestionPools = sequelize.define('QuestionsQuestionPools', {
    active: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return QuestionsQuestionPools;
};