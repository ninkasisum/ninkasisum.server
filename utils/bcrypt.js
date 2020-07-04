const bcrypt = require('bcrypt');

module.exports = {
    hash: async (psw) => {
        return await new Promise((resolve, reject) => {

        });
    },

    compare: async (target, source) => {
        return await new Promise((resolve, reject) => {
            bcrypt.compare(target, source, (err, same) => {
                if (err)
                    reject(err);

                resolve(same);
            })
        })
    }
}