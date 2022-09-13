var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbConnect=require("./util/dbconnect");
var cors = require('cors')
require("dotenv").config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var answerRoute=require("./routes/answer");
var deviceRoute=require("./routes/device");

var app = express();
app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use("/answer",answerRoute);
app.use("/device",deviceRoute);
dbConnect();

module.exports = app;
