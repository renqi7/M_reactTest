var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// 添加藏书阁新增路由
var catelogRouter = require('./routes/catelog')

var ejs = require('ejs')

var app = express();

// 链接数据库
// 设置 Mongoose 连接
const mongoose = require('mongoose');
const mongoDB = 'mongodb://localhost:27017/localLibrary';
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB 连接错误：'));

db.once('open',()=>{console.log("success")})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express)
// app.set('view engine', 'html');
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// 新增藏书阁路由
app.use('/catelog', catelogRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;