const express = require('express');
const router = express.Router();

// router
const boardRouter = require('./todo/boardRouter');
const categoryRouter = require('./todo/categoryRouter');
const noteRouter = require('./todo/noteRouter');

// auth
const normalUserAuth = require('../middlewares/normalUserAuth');

// 일반 유저 확인
// router.use(normalUserAuth);

router.use('/board', boardRouter);
router.use('/category', categoryRouter);
router.use('/note', noteRouter);

module.exports = router;