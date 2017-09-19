const express = require('express');
const session = require('express-session');
const redisStore = require('connect-redis')(session);
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet')
let passport = require('passport');
const redis = require("redis");

const index = require('./routes/index');//TODO: consider removing these two
const users = require('./routes/users');

const app = express();
require('dotenv').config({path: './environments/development'});
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'"]
    }
}));

const Sequelize = require('sequelize')
    , sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    dialect: process.env.SEQUELIZE_DIALECT, // or 'sqlite', 'postgres', 'mariadb'
    port:    process.env.DB_PORT
});

sequelize
    .authenticate()
    .then(function(err) {
        console.log('Connection has been established successfully.');
    }, function (err) {
        console.log('Unable to connect to the database:', err);
    });

let client;
require('./server/passport')(passport);
if(typeof process.env.REDIS_URL === "undefined"){
    client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
}else{
    client = redis.createClient(process.env.REDIS_URL);
}
app.use(session({
    store: new redisStore({
        client: client
    }),
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

require('./server/routes')(app, passport);

// catch 404 and forward to error handler
app.use((req, res, next)=> {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next)=> {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
