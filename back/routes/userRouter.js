const express = require('express');
const router = express.Router();
const user = require('../database/index.js').user;

// for form data
const multer = require('multer');
const upload = multer();

router.get('/', function (req, res) {
    user.getAllUsers()
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

router.get('/check', function (req, res) {
    console.log('login check', req.session);
    res.send(req.session.loggedInId);
});

router.get('/logOut', function (req, res) {
    req.session.destroy(function (err) {
        console.log('aa')
    });
    res.send(true);
});

router.get('/:userId', function (req, res) {
    user.getUserByUserId(req.params.userId)
        .then(result => {
            if (result === null) throw "유저 조회 중 오류가 발생했습니다.";
            res.send(result);
        })
        .catch(error => res.send(error));
});

router.post('/logIn', upload.none(), function (req, res) {
    user.logIn(req.body)
        .then(result => {
            if (result === null) throw "아이디 및 비멀번호를 확인해주세요.";
            req.session.loggedInId = result.userId;
            req.session.privilege = result.privilege;
            res.send({
                name: result.name,
                privilege: result.privilege
            });
        })
        .catch(error => res.send(error));
});

router.post('/signUp', upload.none(), function (req, res) {
    user.createUser(req.body)
        .then(result => {
            if (result === null) throw "회원가입 중 오류가 발생했습니다.";
            res.send(result);
        })
        .catch(error => res.send(error));
});

router.patch('/:userId/:privilege', function (req, res) {
    user.getUserByUserId(req.params.userId)
        .then(result => user.updateUserPrivilege({
            id: result.id,
            privilege: req.params.privilege
        }))
        // 만약 result를 numger형으로 보내면, 상태코드로 오인해서 에러를 뱉는다.
        .then(result => {
            if (result === null) throw "권한 수정 중 오류가 발생했습니다.";
            res.send(`${result}`);
        })
        .catch(error => res.send(error));
});

router.delete('/:userId', function (req, res) {
    user.getUserByUserId(req.params.userId)
        .then(result => user.deleteUserById(result.id))
        .then(result => {
            if (result === null) throw "유저 삭제 중 오류가 발생했습니다.";
            res.send(result);
        })
        .catch(error => res.send(error));
});

module.exports = router;
