const express = require('express');
const router = express.Router();

const session = require('express-session');
const redirect = require('heroku-ssl-redirect');
const path = require('path');

const sessionConfig = session({ secret: '123456',saveUninitialized: true,resave: true });
const public = express.static(path.join(__dirname, '/public'));

router.use(redirect());
router.use(sessionConfig);
router.use(public);


router.get('/login', (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/login.html`)
});

module.exports = router;