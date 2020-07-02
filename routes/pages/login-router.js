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

router.get('/login', (req, res) => {
    res.sendFile(`${getPagesPath(__dirname)}/login.html`);
});

module.exports = router;