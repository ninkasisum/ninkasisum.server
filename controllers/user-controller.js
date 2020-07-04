const mysql = require('../services/mysql-connection')
const bcrypt = require('../utils/bcrypt');

const create = 'INSERT INTO users (name, cnpj, email, password) VALUES ( ?, ?, ?, ?)';
const select = 'SELECT * FROM users WHERE email = ?';

module.exports = {
    api: {
        async create(req, res) {
            const { name, cnpj, usr, psw } = req.body;

            const con = await mysql.build();
            con.connect(() => {
                con.query(select, [usr], async (err, results) => {
                    if (results.length == 0) {
                        const hash = await bcrypt.hash(psw);

                        con.query(create, [name, cnpj, usr, hash], () => {
                            res.status(201).send();
                        });

                    } else res.status(406).send();
                })
            });
        },
        async update() {

        },
        async delete() {

        },
        async find(req, res) {
            const { usr, psw } = req.body;

            const con = await mysql.build();
            con.connect(() => {
                con.query(select, [usr], async (err, results) => {
                    if (results.length == 1) {
                        const hash = await bcrypt.hash(psw);
                        const user = results[0];
                        user.password = user.password.toString('utf8');

                        if (bcrypt.compare(user.password, hash)) {
                            res.status(200).json(user);
                        } else res.status(401).send();
                    } else res.status(404).send();
                })
            });
        },

        async list() {

        }
    },
    local: {
        async create(req, res) {
            // const { name, cnpj, usr, psw } = req.body;

            // const con = await mysql.build();
            // con.connect(() => {
            //     con.query(select, [usr], async (err, results) => {
            //         if (results.length == 0) {
            //             const hash = await bcrypt.hash(psw);

            //             con.query(create, [name, cnpj, usr, hash], () => {
            //                 res.status(201).send();
            //             });

            //         } else res.status(406).send();
            //     })
            // });
        },
        async update() {

        },
        async delete() {

        },
        async find(user) {
            const { usr, psw } = user;
            const con = await mysql.build();
            
            return await new Promise((resolve, reject) => {
                con.connect(() => {
                    con.query(select, [usr], async (err, results) => {
    
                        if (results.length == 1) {
                            const hash = await bcrypt.hash(psw);
                            const user = results[0];
                            user.password = user.password.toString('utf8');
    
                            if (bcrypt.compare(user.password, hash)) {
                                resolve(user);
                            }
                        }
                    })
                });
            })
        },

        async list() {

        }
    }
}