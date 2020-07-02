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


const sessionController = require('../controllers/sessionController');

router.get('/shop', (req, res) => {
    sessionController.find(req.session['ninka'])
    .then(({user, err}) => {
        const path = (user)? 'shop': 'login';
        res.setHeader("Content-Type", "text/html")
        res.sendFile(`${__dirname}/views/pages/${path}.html`);
    });
});


module.exports = router;