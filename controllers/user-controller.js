const mysql = require('../services/mysql-connection')
const bcrypt = require('bcrypt');

module.exports = {
    async create(req, res) {
        try {
            let { name, cnpj, usr, psw } = req.body;
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(psw, salt, function (err, hash) {
                    psw = hash;
                });
            });


            const con = await mysql.build();
            con.connect((err) => {
                if (err)
                    throw err;
    
                // I KNOW THIS IS VULNERABLE TO SQL INJECTION YOUR DUMB PSEUDO HACKER
                // I JUST HAVE A PROJECT TO DELIVERY MAN
                // LEAVE ME ALONE!
                var sql = `INSERT INTO users (name, cnpj, email, password) VALUES ( ?, ?, ?, ?)`;
                con.query(sql, [name, cnpj, usr, psw] , (err, result) => {
                    if (err)
                        throw err;
    
                    res.status(201).send();
                });
            });  
        } catch(e) { return false; }
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