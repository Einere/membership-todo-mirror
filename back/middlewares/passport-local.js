const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {userDB} = require('../database/index.js');

passport.serializeUser((user, done) => {
    console.log('serializeUser', user);
    done(null, user);
});

passport.deserializeUser((user, done) => {
    console.log('deserializeUser', user);
    done(null, user);
});

// 회원가입
passport.use(
    'localSignUp',
    new LocalStrategy(
        {
            usernameField: 'user_id',
            passwordField: 'password',
            session: true,
            passReqToCallback: true,
        },
        async (req, user_id, password, done) => {
            try {
                const result = await userDB.createUser(req.body);
                console.log('[passport-local] localSignUp : ', result);
                const user = {
                    name: result.name,
                    privilege: result.privilege,
                };
                return done(null, user);
            } catch (err) {
                return done(null, false, {
                    message: err,
                });
            }
        },
    ),
);

// 로그인
passport.use(
    'localLogIn',
    new LocalStrategy(
        {
            usernameField: 'user_id',
            passwordField: 'password',
            session: true,
            passReqToCallback: true,
        },
        async (req, user_id, password, done) => {
            const result = await userDB.logIn({user_id, password});

            if (!result) {
                return done(null, false, {
                    message: '아이디와 비밀번호를 확인!',
                });
            }

            const user = {
                name: result.name,
                userId: result.userId,
                privilege: result.privilege,
            };

            return done(null, user);
        },
    ),
);

module.exports = passport;