const express = require('express');
const router = express.Router();
const {userDB} = require('../database/index.js');

// for form data
const multer = require('multer');
const upload = multer();

// auth
const passport = require('../middlewares/passport-local');
const adminAuth = require('../middlewares/adminAuth');

// 관리자 권한 확인
router.use(adminAuth);

// 권한 확인
router.get('/isPrivileged', function (req, res) {
    if (req.user.privilege < 2) res.status(200).json(req.user);
    else res.status(403).send();
});

// 모든 유저 조회
router.get('/users', function (req, res) {
    userDB.getAllUsers()
        .then(result => {
            if (result === null) throw "유저 조회 중 오류가 발생했습니다.";
            res.status(200).json(result);
        })
        .catch(error => res.send(error));
});

// 특정 유저 조회
router.get('/user/:userId', function (req, res) {

});

// 특정 유저 권한 수정
router.patch('/user/:userId/:privilege', function (req, res) {
    userDB.getUserByUserId(req.params.userId)
        .then(result => userDB.updateUserPrivilege({
            id: result.id,
            privilege: req.params.privilege
        }))
        // 만약 result를 numger형으로 보내면, 상태코드로 오인해서 에러를 뱉는다.
        .then(result => {
            if (result === null) throw "권한 수정 중 오류가 발생했습니다.";
            res.status(200).send(`${result}`);
        })
        .catch(error => res.send(error));
});

// 특정 유저 삭제
router.delete('user/:userId', function (req, res) {
    userDB.getUserByUserId(req.params.userId)
        .then(result => userDB.deleteUserById(result.id))
        .then(result => {
            if (result === null) throw "유저 삭제 중 오류가 발생했습니다.";
            res.status(200).send(result);
        })
        .catch(error => res.send(error));
});


module.exports = router;