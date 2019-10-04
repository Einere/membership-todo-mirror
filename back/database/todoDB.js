const pool = require('./db.js');
const {boardModel, categoryModel, noteModel, modeModel, whitelistMode, logModel} = require('./models/index.js');
const todoQueries = require('./SQL/todoQueries.js');

const todoDB = {};

module.exports = todoDB;