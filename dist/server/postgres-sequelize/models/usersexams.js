'use strict';

module.exports = function (sequelize, DataTypes) {
    var UsersExams = sequelize.define('UsersExams', {
        content: DataTypes.JSON
    }, {
        id: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    }, {
        startedAt: DataTypes.DATE
    }, {
        finishedAt: DataTypes.DATE
    }, {
        wasInterrupted: DataTypes.BOOLEAN,
        defaultValue: false
    }, {
        interruptionReason: DataTypes.TEXT,
        allowNull: true
    }, {
        classMethods: {
            associate: function associate(models) {
                // associations can be defined here
            }
        }
    });
    return UsersExams;
};
//# sourceMappingURL=usersexams.js.map