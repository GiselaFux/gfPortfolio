var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var mainRouter = require('./src/routes/main');
//var usersRouter = require('./src/routes/user');
const aboutMeRouter= require('./src/routes/aboutMe');
const projectsRouter= require('./src/routes/projects');
const knowledgeRouter= require('./src/routes/knowledge');
const contactRouter= require('./src/routes/user');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
//app.use('/user', usersRouter);
app.use('/aboutMe', aboutMeRouter);
app.use('/projects', projectsRouter);
app.use('/knowledge', knowledgeRouter); 
app.use('/user', contactRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
