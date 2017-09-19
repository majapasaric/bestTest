'use strict';

module.exports = function (sequelize, DataTypes) {
    var Answer = sequelize.define('Answer', {
        correct: DataTypes.BOOLEAN
    }, {
        text: DataTypes.STRING
    }, {
        id: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    }, {
        classMethods: {
            associate: function associate(models) {
                Answer.belongsTo(models.Question, {
                    onDelete: 'CASCADE'
                });
                Answer.belongsTo(models.AnswerImage, { allowNull: true });
            }
        }
    });
    return Answer;
};
//# sourceMappingURL=answer.js.map