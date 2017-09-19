/**
 * Created by mpasaric on 17.2.2017..
 */
const uuidV4 = require('uuid/v4');
const Question = require('../models-sequelize/models').Question;

module.exports = {
    create(req, res) {
        return Question
            .create({
                id: uuidV4(),
                revisionCode: 0,
                difficultyLevel: req.body.difficultyLevel,
                answerInputType: req.body.answerInputType,
                answerContentType: req.body.answerContentType,
                pointsIfCorrect: req.body.pointsIfCorrect,
                pointsIfIncorrect: req.body.pointsIfIncorrect
            })
            .then(question => res.status(201).send(question))
            .catch(error => res.status(400).send(error));
    },
    findByIdAndRevisionCode(req, res){
        return Question.findOne({
            where: {id: req.body.questionId,
                revisionCode: req.body.revisionCode}
        })
            .then(question => {
            if(question == null){
                return res.status(404).send({
                    message: 'Question Not Found',
                });
            }else{
                return res.status(200).send(question);
            }
        })
            .catch(error => res.status(400).send(error));
    },
    listRevisions(req, res){
        return Question.findAll({
            where: {id: req.body.questionId,
                rejectOnEmpty: false}
        })
            .then(questions => {
                if(questions === []){
                    return res.status(404).send('No Question(s) Found For Id');
                }else{
                    return res.status(200).send(questions);
                }
            });
    }
};