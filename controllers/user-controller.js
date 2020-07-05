const mysql = require('../services/mysql-connection')
const bcrypt = require('bcrypt');

const create = 'INSERT INTO users (name, cnpj, email, password) VALUES ( ?, ?, ?, ?)';
const select = 'SELECT * FROM users WHERE email = ?';
const gambiarra = 'SELECT * FROM users WHERE password = ?';
const sqldelete = 'DELETE FROM users WHERE id = ?';

module.exports = {
    api: {
        async create(req, res) {
            try {
                const { name, cnpj, usr, psw } = req.body;

                const ccnpj = cnpj.replace('.', '')
                    .replace('/', '')
                    .replace('-', '');

                const con = await mysql.build();
                con.connect(() => {
                    con.query(select, [usr], async (err, results) => {
                        if (results.length == 0) {
                            bcrypt.hash(psw, 10, (err, hash) => {
                                if (err)
                                    res.status(500).send();
                                    

                                con.query(create, [name, ccnpj, usr, hash], () => {
                                    con.end();
                                    res.status(201).send();
                                });
                            });
                        } else {
                            con.end();
                            res.status(406).send();
                        }
                    })
                });
            } catch (e) {
                res.status(500).send();
            } finally { con.end(); }
        },
        async update() {

        },
        async delete(req, res) {
            try {
                const cookie = req.session['ninkasisum'];
                const con = await mysql.build();
                con.connect(() => {
                    con.query(gambiarra, [cookie], async (err, results) => {
                        if (results.length == 1) {
                            con.query(sqldelete, [results[0]['id']], async(err, results) => {
                                con.end();

                                if (!err)
                                    res.status(200).send();

                                else res.status(500).send();
                            });
                        } else {
                            con.end();
                            res.status(401).send();
                        }
                    })
                });
            } catch (e) {
                res.status(500).send();
            } finally { con.end(); }
        },
        async find(req, res) {
            try {
                const cookie = req.session['ninkasisum'];

                const con = await mysql.build();
                con.connect(() => {
                    con.query(gambiarra, [cookie], async (err, results) => {
                        con.end();

                        if (results.length == 1) {
                            const user = results[0];

                            delete user.password;
                            delete user.id;

                            res.status(200).json(user);
                        } else res.status(404).send();
                    })
                });
            } catch (e) {
                res.status(500).send();
             } finally { con.end(); }
        },

        async list() {

        }
    },
    local: {
        async find(user) {
            return await new Promise(async (resolve, reject) => {
                const { usr, psw } = user;
                const con = await mysql.build();
                con.connect(() => {
                    con.query(select, [usr], async (err, results) => {
                        con.end();

                        if (results.length == 1) {
                            let user = results[0];
                            user.password = user.password.toString('utf8');
                            const same = await bcrypt.compare(psw, user.password);
                            resolve(((same) ? user : false));
                        } else resolve(false);
                    })
                });
            })
        }
    }
}