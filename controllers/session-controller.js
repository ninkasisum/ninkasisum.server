const bcrypt = require('bcrypt');
const userController = require('./user-controller');
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
                const found = await userController.local.find(user);
                if (found) {
                    bcrypt.hash(user.psw, 10, (err, hash) => {
                        bcrypt.compare(found.password, hash, (err, res) => {
                            if (err || !res)
                                res.status(401).json({ err: "401 Unauthorized" });
    
                            const cookie = hash.split('.')[0];
                            req.session['ninkasisum'] = cookie;
                            users.push({ cookie, user }); 
                            res.redirect(301, `https://${req.hostname}`);
                        }); 
                    })
                } else
                    res.status(404).json({ err: "404 Not Found" });
            } else
                res.status(400).json({ err: "400 Bad Request" });
        } catch (e) {
            res.status(500).json({ err: "500 Internal Server Error" });
        }
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
                        found = true;
                        break;
                    }
                }

                if(true) // if (found) 
                {
                    req.session['ninkasisum'] = null;
                    res.redirect(301, `https://${req.hostname}`);
                } else res.status(404).json({ err: "404 Not Found" });
            } else res.status(400).json({ err: "400 Bad Request" });
        } catch (e) { res.status(500).json({ err: "500 Internal Server Error" }) }
    }
};