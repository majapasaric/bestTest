'use strict';

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        id: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    }, {
        password: DataTypes.STRING,
        allowNull: false
    }, {
        email: DataTypes.STRING,
        validate: { isEmail: true }
    }, {
        personalIdentificationNumber: DataTypes.STRING
    }, {
        address: DataTypes.STRING
    }, {
        phoneContact: DataTypes.STRING
    }, {
        educationLevel: DataTypes.STRING
    }, {
        occupation: DataTypes.STRING
    }, {
        gender: {
            type: DataTypes.ENUM,
            values: ['male', 'female', 'intersex', 'non-binary', 'would rather not disclose']
        }
    }, {
        classMethods: {
            associate: function associate(models) {
                User.belongsTo(models.Organization);
                User.belongsToMany(models.Group, { through: models.UsersGroups });
            }
        }
    });
    return User;
};
//# sourceMappingURL=user.js.map