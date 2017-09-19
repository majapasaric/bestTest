'use strict';
module.exports = function(sequelize, DataTypes) {
    const UsersGroups = sequelize.define('UsersGroups', {
            isGroupAdmin: DataTypes.BOOLEAN
        },
        {
            relationshipActive: DataTypes.BOOLEAN
        },
        {
            role: {
                type:   DataTypes.ENUM,
                values: ['client', 'groupAdmin']
            }
        },
        {
            classMethods: {
                associate: (models)=> {
                    UsersGroups.belongsTo(models.Group, {foreignKey : 'parentGroup', as: 'parentGroup', allowNull : true, defaultValue : null})
                }
            }
        });
    return UsersGroups;
};