const express = require('express');
const router = express.Router();
const {userDB, todoDB} = require('../../database/index.js');
const step = 65536; // 2^16

// for form data
const multer = require('multer');
const upload = multer();

router.get('/:categoryId', function (req, res) {
    todoDB.getNotesByCategoryId(req.params.categoryId)
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

router.post('/:categoryId', upload.none(), async function (req, res) {
    try {
        const {position} = await todoDB.getMaxPositionByCategoryId(req.params.categoryId);
        // const {id} = await userDB.getUserByUserId(req.user.userId);
        // if(position && id) todoDB.createNote(req.params.categoryId, req.body.content, id, position + step)
        if (position) {
            todoDB.createNote(req.params.categoryId, req.body.content, req.body.author, position + step)
                .then(result => res.send(result))
                .catch(error => res.send(error));
        }
    } catch (e) {
        res.send(e);
    }
});

router.patch('/content/:noteId', upload.none(), function (req, res) {
    todoDB.updateNoteContentById(req.params.noteId, req.body.content)
        .then(() => res.send(true))
        .catch(error => res.send(error));
});

router.patch('/move', upload.none(), function (req, res) {
    todoDB.moveNoteById(req.body.noteId, req.body.from, req.body.to, req.body.newPosition)
        .then(() => res.send(true))
        .catch(error => res.send(error));
});

router.delete('/:noteId', function (req, res) {
    todoDB.deleteNoteById(req.params.noteId)
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

module.exports = router;