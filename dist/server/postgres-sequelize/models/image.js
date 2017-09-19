'use strict';

module.exports = function (sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    image: DataTypes.BLOB('long')
  }, {
    classMethods: {
      associate: function associate(models) {
        // associations can be defined here
      }
    }
  });
  return Image;
};
//# sourceMappingURL=image.js.map