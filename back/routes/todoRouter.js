const express = require('express');
const router = express.Router();

// router
const boardRouter = require('./todo/boardRouter');
const categoryRouer = require('./todo/categoryRouter');

// auth
const normalUserAuth = require('../middlewares/normalUserAuth');

// 일반 유저 확인
// router.use(normalUserAuth);

router.use('/board', boardRouter);
router.use('/category', categoryRouer);

module.exports = router;