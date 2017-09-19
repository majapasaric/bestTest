'use strict';

module.exports = function (sequelize, DataTypes) {
  var AnswerImage = sequelize.define('AnswerImage', {
    image: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return AnswerImage;
};
//# sourceMappingURL=answerimage.js.map