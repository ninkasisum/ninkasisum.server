const express = require('express');
const router = express.Router();
const getPagesPath = require('../utils/path')
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
        maxAge: 60000
    }
}));

const utils = require('../utils');
router.get('/login', (req, res) => {
    res.sendFile(`${utils.getPath()}login.html`);
});

module.exports = router;