'use strict';

var bcrypt = require('bcryptjs');

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
        validate: { isEmail: true },
        unique: true
    }, {
        personalIdentificationNumber: DataTypes.STRING,
        allowNull: false
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
        isSysAdmin: DataTypes.BOOLEAN,
        defaultValue: false
    }, {
        isOrgAdmin: DataTypes.BOOLEAN,
        defaultValue: false
    }, {
        classMethods: {
            associate: function associate(models) {
                User.belongsTo(models.Organization);
                User.belongsToMany(models.Group, { through: models.UsersGroups });
            },
            generateHash: function generateHash(password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
            }
        },
        instanceMethods: {
            validPassword: function validPassword(password) {
                return bcrypt.compareSync(password, undefined.password);
            }
        }
    });

    return User;
};
//# sourceMappingURL=user.js.map