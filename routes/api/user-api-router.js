const express = require('express');
const userController = require('../../controllers/user-controller');
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
    cookie: { maxAge: 60000 }
 }));


router.get('api/user', userController.find)

module.exports = router;