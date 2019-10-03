const userDB = require('./userDB.js');
const itemDB = require('./itemDB.js');
const todoDB = require('./todoDB.js');

const database = {
    userDB,
    itemDB,
    todoDB,
};

module.exports = database;