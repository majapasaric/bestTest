'use strict';

module.exports = function (sequelize, DataTypes) {
    var ExamsQuestionPools = sequelize.define('ExamsQuestionPools', {
        questionAmount: DataTypes.INTEGER
    }, {
        poolPassFloor: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            isFloat: true,
            isGreaterThanZero: function isGreaterThanZero(value) {
                if (parseFloat(value) <= 0) {
                    throw new Error('The pass criteria cannot be set as a negative percentage!');
                }
            },
            isPercentage: function isPercentage(value) {
                if (parseFloat(value) > 100) {
                    throw new Error('The pass criteria cannot be more than 100%!');
                }
            }
        }
    }, {
        questionCount: DataTypes.INTEGER,
        validate: {
            isInt: true,
            isGreaterThanZero: function isGreaterThanZero(value) {
                if (parseInt(value) <= 0) {
                    throw new Error('The amount of questions cannot be set as zero or negative!');
                }
            },
            isWithinBounds: true
        }

    }, {
        classMethods: {
            associate: function associate(models) {}
        },
        instanceMethods: {}
    });
    return ExamsQuestionPools;
};
//# sourceMappingURL=examsquestionpools.js.map