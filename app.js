var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

var passport = require('./middleware/passport');
var routes = require('./routes/index');
var database = require('./config/database');
var { authFactory } = require('./middleware/authHandler');

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());

database.connect();

app.use(authFactory);
app.use('/api',routes);


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.ENVIRONMENT === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({error:err.message});
});

app.listen(process.env.SERVER_PORT || 3000, () => {
  console.log('listening on port 3000')
})

module.exports = app;
