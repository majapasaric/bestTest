'use strict';

module.exports = function (sequelize, DataTypes) {
  var QuestionsQuestionPools = sequelize.define('QuestionsQuestionPools', {
    active: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return QuestionsQuestionPools;
};
//# sourceMappingURL=questionsquestionpools.js.map