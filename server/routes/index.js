/**
 * Created by mpasaric on 17.2.2017..
 */
const questionsController = require('../controllers').questions;
module.exports = (app) => {
    // app.get('/api', (req, res) => res.status(200).send({
    //     message: 'Welcome to the Todos API!',
    // }));

    app.post('/api/questions', questionsController.create);
};