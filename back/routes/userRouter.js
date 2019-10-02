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
    req.session.destroy();
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
    /*user.logIn(req.body)
        .then(result => {
            if (result === null) throw "아이디 및 비멀번호를 확인해주세요.";
            req.session.loggedInId = result.userId;
            req.session.privilege = result.privilege;
            res.status(200).send({
                name: result.name,
                privilege: result.privilege
            });
        })
        .catch(error => res.send(error));*/
    passport.authenticate('localLogIn', (err, user, info) => {
        if (err) next(err);
        if (!user) res.status(401).json(info);
        else {
            req.login(user, (e) => {
                if (e) return next(e);
                res.status(200).send(user);
            });
        }
    })(req, res, next);
});

// 회원가입
router.post('/signUp', upload.none(), function (req, res, next) {
    /*user.createUser(req.body)
        .then(result => {
            if (result === null) throw "회원가입 중 오류가 발생했습니다.";
            res.status(200).send(result);
        })
        .catch(error => res.send(error));*/
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
