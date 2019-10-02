// environment
const dotenv = require('dotenv');
const result = dotenv.config();
if (result.error) throw result.error;

// default middleware
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// cors
const whitelist = require('./cors/whitelist');
const cors = require('cors');
// session
const session = require('express-session');
const redis = require('redis');
const RedisStore = require('connect-redis')(session);
const redisClient = redis.createClient();
redisClient.on('error', (err) => {
    console.log('Redis error: ', err);
});
const sessionConfig = require('./session/sessionConfig');
// auth
const passport = require('passport');
// routes
const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/userRouter');
const itemRouter = require('./routes/itemRouter');
const adminRouter = require('./routes/adminRouter');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// cors
app.use(cors({
    origin: function (origin, callback) {
        callback(whitelist.indexOf(origin) > -1 || !origin ? null : new Error('Not allowed by CORS'), true);
        // 만약 서버 - 서버 api로 사용하고 싶으면 아래와 같이 코딩한다
        // 참고 : https://expressjs.com/en/resources/middleware/cors.html
        // callback(whitelist.indexOf(origin) > -1 || !origin ? null : new Error('Not allowed by CORS'), true);
    },
    methods: "GET, POST, PATCH, DELETE",
    credentials: true,
}));

// session
app.use(session(sessionConfig(RedisStore, redisClient)));

// passport
app.use(passport.initialize());
app.use(passport.session());
// flash

// routing
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/item', itemRouter);
app.use('/admin', adminRouter);

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
