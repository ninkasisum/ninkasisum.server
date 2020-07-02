const bcrypt = require('bcrypt');
const users = [];

function isValidLoginRequest(body) {
    return (body &&
        body.usr &&
        body.psw &&
        body.usr.length > 0 &&
        body.psw.length > 0);
};

function isValidLogoutRequest(cookie) {
    return (users.find((user) => user.cookie === cookie));
};

module.exports = {
    async login(req, res) {
        const user = req.body;
        try {
            if (isValidLoginRequest(user)) {
                // query in database service the user -> POSTGREE
                const found = user; // PARA TESTES POR FAVOR EXCLUA ANTES DE SUBIR

                if (found) {
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(user.psw, salt, function (err, hash) {

                            found.psw = hash; // PARA TESTES POR FAVOR EXCLUA ANTES DE SUBIR

                            if (bcrypt.compare(found.psw, hash)) {

                                
                                req.session['ninkasisum'] = salt;

                                users.push({ cookie: salt, user }); // create a session in memory database with the user -> MONGOOSE

                                res.redirect('/');
                            } else res.status(401).json(JSON.stringify({ err: "401 Unauthorized" }))
                        });
                    });
                } else res.status(404).json(JSON.stringify({ err: "404 Not Found" }));
            } else res.status(400).json(JSON.parse({ err: "400 Bad Request" }));
        } catch (e) { res.status(500).json(JSON.parse({ err: "500 Internal Server Error" })) }
    },

    async logout(req, res) {
        const user = req.body;
        const cookie = req.session['ninkasisum'];
        try {
            if (isValidLogoutRequest(cookie)) {

                let found = false;
                for (let i = 0; i < users.length; i++) {
                    if (users[i].cookie === cookie) {
                        users.splice(i, 1);
                        aux = true;
                        break;
                    }
                }

                if (found) 
                {
                    res.status(200).json(JSON.stringify({ msg: "200 Logout with success"}))
                } else res.status(404).json(JSON.stringify({ err: "404 Not Found" }));
            } else res.status(400).json(JSON.parse({ err: "400 Bad Request" }));
        } catch (e) { res.status(500).json(JSON.parse({ err: "500 Internal Server Error" })) }
    }
};