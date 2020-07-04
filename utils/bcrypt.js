const bcrypt = require('bcrypt');

module.exports = {
    hash: async (psw) => {
        return await new Promise((resolve, reject) => {
            bcrypt.hash(psw, 10, (err, hash) => {
                if (err)
                    reject(err);

                resolve(hash);
            })
        });
    }
}