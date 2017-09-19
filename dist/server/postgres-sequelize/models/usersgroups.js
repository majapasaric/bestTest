'use strict';

module.exports = function (sequelize, DataTypes) {
  var UsersGroups = sequelize.define('UsersGroups', {
    role: DataTypes.INTEGER // 0 - client, 1 = group admin, 2 = org admin, 4 = system admin
  }, {
    classMethods: {
      associate: function associate(models) {
        UsersGroups.belongsTo(models.Group, { foreignKey: 'parentGroup', allowNull: true, defaultValue: null });
      }
    }
  });
  return UsersGroups;
};
//# sourceMappingURL=usersgroups.js.map