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
        maxAge: 60000
    }
}));

router.get('/', (req, res) => {
    const cookie = req.session['ninkasisum'];
    const notAllowed = 'login';
    res.sendFile(`../../views/pages/${(!cookie)?notAllowed:'index'}.html`)
});

module.exports = router;