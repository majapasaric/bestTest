'use strict';
module.exports = (sequelize, DataTypes)=> {
    const Promotion = sequelize.define('Promotion', {
            code: DataTypes.STRING
        },
        {
            id: DataTypes.UUID,
            primaryKey : true,
            defaultValue : DataTypes.UUIDV4
        },
        {
            activeFrom: DataTypes.DATE
        },
        {
            activeTill: DataTypes.DATE
        },
        {
            classMethods: {
                associate: function(models) {
                    // associations can be defined here
                }
            }
        });
    return Promotion;
};