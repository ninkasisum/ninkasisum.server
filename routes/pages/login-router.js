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
router.get('/login', (req, res) => {
    res.sendFile(`${utils.getPath()}login.html`);
});

module.exports = router;