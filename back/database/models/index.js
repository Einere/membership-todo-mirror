const userModel = require('./userModel.js');
const itemModel = require('./itemModel.js');
const boardModel = require('./boardModel.js');
const categoryModel = require('./categoryModel.js');
const noteModel = require('./noteModel.js');
const modeModel = require('./modeModel.js');
const logModel = require('./logModel.js');
const whitelistModel = require('./whitelistModel.js');

const models = {
    userModel,
    itemModel,
    boardModel,
    categoryModel,
    noteModel,
    modeModel,
    logModel,
    whitelistModel,
};

module.exports = models;