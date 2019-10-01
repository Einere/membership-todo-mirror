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

router.get('/:userId', function (req, res) {
    user.getUserByUserId(req.params.userId)
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

router.post('/signUp', upload.none(), function (req, res) {
    user.createUser(req.body)
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

router.patch('/:userId/:privilege', function (req, res) {
    user.getUserByUserId(req.params.userId)
        .then(result => user.updateUserPrivilege({
            id: result.id,
            privilege: req.params.privilege
        }))
        // 만약 result를 numger형으로 보내면, 상태코드로 오인해서 에러를 뱉는다.
        .then(result => res.send(`${result}`))
        .catch(error => res.send(error));
});

router.delete('/:userId', function (req, res) {
    user.getUserByUserId(req.params.userId)
        .then(result => user.deleteUserById(result.id))
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

module.exports = router;
