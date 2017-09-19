'use strict';
module.exports = (sequelize, DataTypes)=> {
    const QuestionPool = sequelize.define('QuestionPool', {
            id: DataTypes.UUID,
            primaryKey : true,
            defaultValue : DataTypes.UUIDV4
        },
        {
            name: DataTypes.STRING
        },
        {
            description: DataTypes.STRING
        },
        {
            classMethods: {
            associate: (models)=> {
            QuestionPool.belongsToMany(models.Question, {through: models.QuestionsQuestionPools});
        }
    }
});
return QuestionPool;
};