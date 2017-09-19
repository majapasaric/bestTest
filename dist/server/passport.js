'use strict';

var LocalStrategy = require('passport-local').Strategy;
var User = require('./models-sequelize/models/user');

module.exports = function (passport) {

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (req, email, password, done) {

        process.nextTick(function () {
            User.findOne({
                where: { email: email }
            }).then(function (user) {
                if (user == null) {
                    (function () {
                        var newUser = new User();
                        newUser.email = email;
                        newUser.password = newUser.generateHash(password); //I have to set up the taking of the rest of the req

                        newUser.save(function (err) {
                            if (err) throw err;
                            return done(null, newUser);
                        });
                    })();
                } else {
                    return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                }
            });
        });
    }));

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass back the entire request to the callback
    }, function (req, email, password, done) {
        // callback with email and password from our form

        User.findOne({
            where: { email: email }
        }).then(function (user) {
            if (user == null) {
                return done(null, false, { message: 'Incorrect credentials.' });
            } else {
                if (!user.validPassword(password)) {
                    return done(null, false, { message: 'Incorrect credentials.' });
                } else {
                    return done(null, user);
                }
            }
        });
    }));
};
//# sourceMappingURL=passport.js.map