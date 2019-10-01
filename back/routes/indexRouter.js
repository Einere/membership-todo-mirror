const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    console.log(req.session);
    res.render('index', {title: 'Express'});
});

module.exports = router;
