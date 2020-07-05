const express = require('express');
const router = express.Router();
const session = require('express-session');

router.use(express.json());
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
router.get('/', (req, res) => {
    const cookie = req.session['ninkasisum'];

    const file = `${utils.getPath()}${(!cookie)?'login':'index'}.html`;

    res.sendFile(file);
});

module.exports = router;