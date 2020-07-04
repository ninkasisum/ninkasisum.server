const bcrypt = require('bcrypt');

module.exports = {
    hash: async (psw) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(psw, salt, function (err, hash) {
                return hash;
            });
        });
    }
}