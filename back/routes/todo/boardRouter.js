const express = require('express');
const router = express.Router();
const {userDB, todoDB} = require('../../database/index.js');

// for form data
const multer = require('multer');
const upload = multer();

router.get('/:userId', function (req, res) {
    // todo : Mode, Whitelist 테이블을 이용해 공개 범위를 확인해야 한다.
    todoDB.getBoardByUserId(req.params.userId)
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

router.get('/', function (req, res) {
    console.log(req.session);
    res.send('board router!');
});

router.post('/', upload.none(), async function (req, res) {
    try {
        // 생성은 본인만 가능해야 함 => session 이용
        // const user = await userDB.getUserByUserId(req.user.userId);
        const user = await userDB.getUserByUserId(req.body.userId);
        const mode = await todoDB.createMode(req.body.mode);

        if (user && mode) {
            todoDB.createBoard(req.body.name, user.id, mode.id)
                .then(result => res.send(result))
                .catch(error => res.send(error));
        }
    } catch (e) {
        res.send(e);
    }
});

router.patch('/name/:name', upload.none(), async function (req, res) {
    try {
        // 수정은 본인만 가능해야 함 => session 이용
        // const board = await todoDB.getBoardByUserId(req.user.userId);
        const board = await todoDB.getBoardByUserId(req.body.userId);
        console.log(board);

        if (board) {
            todoDB.updateBoardNameById(board.id, req.params.name)
                .then(() => res.send(true))
                .catch(error => res.send(error));
        }
    } catch (e) {
        res.send(e);
    }
});

router.patch('/mode/:mode', upload.none(), async function (req, res) {
    try {
        // 수정은 본인만 가능해야 함 => session 이용
        // const board = await todoDB.getBoardByUserId(req.user.userId);
        const board = await todoDB.getBoardByUserId(req.body.userId);
        const mode = await todoDB.getModeById(board.mode);

        if (board && mode) {
            todoDB.updateModeById(mode.id, req.params.mode)
                .then(() => res.send(true))
                .catch(error => res.send(error));
        }
    } catch (e) {
        res.send(e);
    }
});

router.delete('/', upload.none(), async function (req, res) {
    try {
        // 삭제는 본인만 가능해야 함 => session을 이용
        // const board = await todoDB.getBoardByUserId(req.user.userId);
        const board = await todoDB.getBoardByUserId(req.body.userId);
        console.log(board);

        if (board) {
            todoDB.deleteBoardById(board.id)
                .then(result => res.send(result))
                .catch(error => res.send(error));
        }
    } catch (e) {

    }
});


module.exports = router;