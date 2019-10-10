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

router.post('/', upload.none(), async function (req, res) {
    try {
        const {position} = await todoDB.getMaxPositionByCategoryId(req.body.categoryId);
        const {id} = await userDB.getUserByUserId(req.body.userId);

        if (position) {
            todoDB.createNote(req.body.categoryId, req.body.content, id, position + step)
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