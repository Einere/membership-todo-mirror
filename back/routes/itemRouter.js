const express = require('express');
const router = express.Router();
const item = require('../database/index.js').item;
const formatFileName = require('../utils/formatFileName.js');

// for form data
const multer = require('multer');
const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, './public/uploads');
    },
    filename(req, file, callback) {
        callback(null, formatFileName(file.originalname));
    }
});
const upload = multer({
    storage,
    limits: {
        files: 5,
        fileSize: 1024 * 1024 * 1024,
    }
});


router.get('/', function (req, res) {
    item.getAllItems()
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

router.get('/:id', function (req, res) {
    item.getItemById(req.params.id)
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

router.post('/upload', upload.single('src'), function (req, res) {
    let path = req.file.path.split('/');
    path.shift();
    req.body.src = path.join('/');
    item.createItem(req.body)
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

router.delete('/:id', function (req, res) {
    item.getItemById(req.params.id)
        .then(result => item.deleteItem(result.id))
        .then(result => res.send(result))
        .catch(error => res.send(error));
});

router.patch('/:id', upload.none(), function (req, res) {
    item.getItemById(req.params.id)
        .then(result => {
            req.body.id = result.id;
            return item.updateItem(req.body);
        })
        // 만약 result를 numger형으로 보내면, 상태코드로 오인해서 에러를 뱉는다.
        .then(result => res.send(`${result}`))
        .catch(error => res.send(error));
});


module.exports = router;
