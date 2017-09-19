'use strict';

module.exports = function (sequelize, DataTypes) {
    var Organization = sequelize.define('Organization', {
        name: DataTypes.STRING
    }, {
        id: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    }, {
        email: DataTypes.STRING,
        validate: { isEmail: true }
    }, {
        address: DataTypes.STRING
    }, {
        phoneContact: DataTypes.STRING
    }, {
        companyIdentificationNumber: DataTypes.STRING
    }, {
        classMethods: {
            associate: function associate(models) {
                Organization.hasMany(models.QuestionPool);
                Organization.hasMany(models.Group);
            }
        }
    });
    return Organization;
};
//# sourceMappingURL=organization.js.map