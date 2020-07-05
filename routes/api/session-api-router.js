const express = require('express');
const sessionController = require('../../controllers/session-controller');
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

router.post('/api/login', sessionController.login);
router.post('/api/logout', sessionController.logout);

module.exports = router;