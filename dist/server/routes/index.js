'use strict';

/**
 * Created by mpasaric on 17.2.2017..
 */
var questionsController = require('../controllers').questions;
module.exports = function (app) {
    // app.get('/api', (req, res) => res.status(200).send({
    //     message: 'Welcome to the Todos API!',
    // }));

    app.post('/api/questions', questionsController.create);
};
//# sourceMappingURL=index.js.map