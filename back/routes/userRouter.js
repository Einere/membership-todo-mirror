const express = require('express');
const router = express.Router();
const {userDB} = require('../database/index.js');

// for form data
const multer = require('multer');
const upload = multer();

// auth
const passport = require('../middlewares/passport-local');


// 로그인 확인
router.get('/isLoggedIn', function (req, res) {
    /*console.log('login check', req.session);
    res.status(200).send(req.session.loggedInId);*/
    req.isAuthenticated() ? res.status(200).send(req.user.name) : res.status(204).end();
});

// 로그아웃
router.get('/logOut', function (req, res) {
    req.logout();
    // req.session.destroy();
    res.status(200).send(true);
});

// 특정 유저 조회 (아이디 중복 확인용)
router.get('/:userId', function (req, res) {
    userDB.getUserByUserId(req.params.userId)
        .then(result => {
            if (result === null) throw "유저 조회 중 오류가 발생했습니다.";
            res.status(200).send(result);
        })
        .catch(error => res.send(error));
});

// 로그인
router.post('/logIn', upload.none(), function (req, res, next) {
    passport.authenticate('localLogIn', (err, user, info) => {
        if (err) next(err);
        if (!user) res.status(401).json(info);
        else {
            // it need to explicit session save
            req.session.save(e => {
                if (e) next(e);
                req.login(user, (e) => {
                    if (e) return next(e);
                    res.status(200).send(user);
                });
            });
        }
    })(req, res, next);
});

// 회원가입
router.post('/signUp', upload.none(), function (req, res, next) {
    passport.authenticate('localSignUp', (err, user, info) => {
        console.log('[userRouter.js] signUp : ', err, user, info);
        if (err) next(err);
        if (!user) res.status(401).json(info);
        else {
            req.login(user, (e) => {
                if (e) return next(e);
                res.status(200).end();
            });
        }
    })(req, res, next);
});

module.exports = router;
