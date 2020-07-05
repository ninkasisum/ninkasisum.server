const express = require('express');
const router = express.Router();
router.use(express.json());

const session = require('express-session');
router.use(session({
    cookieName: 'ninkasisum',
    secret: "Qwerty123456",
    resave: false,
    saveUninitialized: true,
    httpOnly: true,
    secure: true,
    ephemeral: true,
    cookie: {
        maxAge: 360000
    }
}));

const utils = require('../utils');
router.get('/shop', (req, res) => {
    const cookie = req.session['ninkasisum'];

    const file = `${utils.getPath()}${(!cookie)?'login':'shop'}.html`;

    res.sendFile(file);
});

module.exports = router;