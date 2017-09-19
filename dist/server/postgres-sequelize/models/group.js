'use strict';

module.exports = function (sequelize, DataTypes) {
    var Group = sequelize.define('Group', {
        name: DataTypes.STRING
    }, {
        id: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    }, {
        classMethods: {
            associate: function associate(models) {
                Group.belongsToMany(models.User, { through: models.UsersGroups });
                Group.belongsTo(models.Organization);
                Group.hasMany(models.Promotion);
                Group.hasMany(models.Exam);
            }
        }
    });
    return Group;
};
//# sourceMappingURL=group.js.map