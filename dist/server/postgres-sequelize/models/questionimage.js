'use strict';

module.exports = function (sequelize, DataTypes) {
  var QuestionImage = sequelize.define('QuestionImage', {
    image: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return QuestionImage;
};
//# sourceMappingURL=questionimage.js.map