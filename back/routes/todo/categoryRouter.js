const express = require('express');
const router = express.Router();
const {todoDB} = require('../../database/index.js');

// for form data
const multer = require('multer');
const upload = multer();

router.get('/:boardId', function (req, res) {
    todoDB.getCategoriesByBoardId(req.params.boardId)
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

router.post('/', upload.none(), function (req, res) {
    todoDB.createCategory(req.body.name, req.body.boardId)
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

router.patch('/name/:categoryId/:name', upload.none(), function (req, res) {
    // todoDB.updateCategoryNameById(req.user., req.params.name)
    todoDB.updateCategoryNameById(req.params.categoryId, req.params.name)
        .then(() => res.send(true))
        .catch(error => res.send(error));
});

router.delete('/:categoryId', function (req, res) {
    todoDB.deleteCategoryById(req.params.categoryId)
        .then(result => res.send(result))
        .catch(error => res.send(error));
});
module.exports = router;