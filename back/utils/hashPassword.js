const crypto = require('crypto');

const salt = 'einere';

module.exports = function (password) {
    return crypto
        .createHash('sha512')
        .update(`${password}${salt}`)
        .digest('base64');
};