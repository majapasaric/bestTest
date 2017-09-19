'use strict';

module.exports = function (sequelize, DataTypes) {
    var Exam = sequelize.define('Exam', {
        name: DataTypes.STRING
    }, {
        id: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    }, {
        examPassFloor: DataTypes.FLOAT,
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
        durationInMinutes: DataTypes.FLOAT,
        validate: {
            isFloat: true,
            isGreaterThanZero: function isGreaterThanZero(value) {
                if (parseFloat(value) <= 0) {
                    throw new Error('The duration must be set in minutes!');
                }
            }
        }
    }, {
        attempts: DataTypes.integer,
        validate: {
            isInt: true,
            isPositive: function isPositive(value) {
                if (parseInt(value < 1)) {
                    throw new Error('The user must be able to take the exam at least once!');
                }
            }
        }
    }, {
        activeFrom: DataTypes.DATE
    }, {
        activeTill: DataTypes.DATE,
        allowNull: true,
        defaultValue: null
    }, {
        classMethods: {
            associate: function associate(models) {
                Exam.belongsTo(models.User, { as: 'createdBy' });
            }
        }
    });
    return Exam;
};
//# sourceMappingURL=exam.js.map