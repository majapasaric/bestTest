'use strict';

module.exports = function (sequelize, DataTypes) {
    var QuestionPool = sequelize.define('QuestionPool', {
        id: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    }, {
        name: DataTypes.STRING
    }, {
        description: DataTypes.STRING
    }, {
        classMethods: {
            associate: function associate(models) {
                QuestionPool.belongsToMany(models.Question, { through: models.QuestionsQuestionPools });
            }
        }
    });
    return QuestionPool;
};
//# sourceMappingURL=questionpool.js.map