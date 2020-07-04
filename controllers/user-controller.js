const mysql = require('../services/mysql-connection')
const bcrypt = require('../utils/bcrypt');

const create = 'INSERT INTO users (name, cnpj, email, password) VALUES ( ?, ?, ?, ?)';
const select = 'SELECT * FROM users WHERE email = ?';

module.exports = {
    async create(req, res) {
        const { name, cnpj, usr, psw } = req.body;

        hash = await bcrypt.hash(psw);

        const con = await mysql.build();
        con.connect(() => {
            con.query(select, [usr], (err, results) => {
                if (results.length == 0) {
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
    async find() {
        // TODO
    },
    async list() {

    }
}