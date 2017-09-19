module.exports = (sequelize, DataTypes)=> {
    const Question = sequelize.define('Question', {
            text: DataTypes.STRING
        },
        {
            id: DataTypes.UUID,
            primaryKey : true,
            defaultValue : DataTypes.UUIDV4
        },
        {
            revisionCode : DataTypes.INTEGER,
            primaryKey : true,
            defaultValue : 0
        },
        {
            timesTaken: DataTypes.INTEGER,
            defaultValue : 0
        },
        {
            timesAnswered: DataTypes.INTEGER,
            defaultValue : 0
        },
        {
            difficultyLevel: DataTypes.DataTypes.ENUM,
            values: ['easy', 'medium', 'difficult', 'very difficult']
        },
        {
            answerInputType: DataTypes.ENUM,
            values: ['checkbox', 'radio button', 'user input']
        },
        {
            answerContentType: DataTypes.ENUM,
            values: ['text only', 'image only', 'mixed content']
        },
        {
            pointsIfCorrect : DataTypes.FLOAT,
            defaultValue : 1,
            allowNull : false,
            validate : {
                isFloat : true,
                isGreaterThanZero: (value) => {
                    if(parseFloat(value)<=0) {
                        throw new Error('The correct answer must award the candidate with more than zero points!');
                    }
                }
            }
        },
        {
            pointsIfIncorrect : DataTypes.FLOAT,
            defaultValue : 0,
            allowNull : false,
            validate : {
                isFloat : true,
                isGreaterThanZero: (value) => {
                    if(parseFloat(value)>0) {
                        throw new Error('The incorrect answer should either award the candidate with zero points or give them negative points!');
                    }
                }
            }
        },
        {
            classMethods: {
                associate: (models) => {
                    Question.hasMany(models.Answer);
                    Question.belongsToMany(models.QuestionPool, {through: models.QuestionsQuestionPools});
                    Question.hasOne(models.QuestionImage, {foreignKey: 'questionId', as: 'qImage'});
                }
            }
        });
    return Question;
};