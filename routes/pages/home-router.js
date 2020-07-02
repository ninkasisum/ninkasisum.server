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

    if (cookie) {
        res.sendFile('../../views/pages/index.html')
    }
});

module.exports = router;