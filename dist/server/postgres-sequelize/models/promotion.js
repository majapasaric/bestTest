'use strict';

module.exports = function (sequelize, DataTypes) {
    var Promotion = sequelize.define('Promotion', {
        code: DataTypes.STRING
    }, {
        id: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    }, {
        activeFrom: DataTypes.DATE
    }, {
        activeTill: DataTypes.DATE
    }, {
        classMethods: {
            associate: function associate(models) {
                // associations can be defined here
            }
        }
    });
    return Promotion;
};
//# sourceMappingURL=promotion.js.map