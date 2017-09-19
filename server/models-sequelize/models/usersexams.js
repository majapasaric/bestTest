'use strict';
module.exports = (sequelize, DataTypes)=> {
    const UsersExams = sequelize.define('UsersExams', {
            content: DataTypes.JSON
        },
        {
            id: DataTypes.UUID,
            primaryKey : true,
            defaultValue : DataTypes.UUIDV4
        },
        {
            startedAt : DataTypes.DATE
        },
        {
            finishedAt : DataTypes.DATE
        },
        {
            wasInterrupted : DataTypes.BOOLEAN,
            defaultValue : false
        },
        {
            interruptionReason : DataTypes.TEXT,
            allowNull : true
        },
        {
            classMethods: {
                associate: (models)=> {
                    // associations can be defined here
                }
            }
        });
    return UsersExams;
};