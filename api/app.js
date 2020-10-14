//this file is use to define routes 
//it is a view engine 
//all the basic modules which is used in our project is must be inside the app.js
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const UserRegister = require('./models/userModel');

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
  mongoose.connect('mongodb://localhost:27017/FitFactory',{ useNewUrlParser: true },()=>console.log("Db Connected"))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); /*to fetch the data in the form of JSON  from the input feild or form 
feild express.urlencoded must be  true instead of false */  
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//mongoose is a module which is used to define daatabase connection between nodejs and mongodb
/*if we want to use any module example mongoose in our project then first of all we have to require out modules 
or include our module  eg: var module_name = require("module_name")*/
// mongoose.connect('mongodb://localhost:27017/fitfactory',{useNewUrlParser:true})
// let db =mongoose.connection;
// db.once('open',function(){
//   console.log("connnecteddd to mongooo");
// });
// db.on('error',function(err){
//   console.log(err);
// });
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
