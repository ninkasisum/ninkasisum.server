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


const dbHandler = require('../../infra/memorydb');
const sessionController = require('../../controllers/sessionController');

dbHandler.connect();
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.post('/api/login', jsonParser, (req, res) => {
    sessionController.create({ _id: req.body['Ea'], user: req.body })
        .then((session) => {
            req.session['ninka'] = session._id;
            res.redirect(`https://${req.host}`);
        });
});

router.get('/api/user', (req, res) => {
    sessionController.find(req.session['ninka'])
        .then((user) => {
            res.json(JSON.stringify(user));
        })
})

router.post('/api/logout', (req, res) => {
    sessionController.delete(req.session['ninka'])
        .then(() => {
            req.session.destroy()
            res.redirect(`https://${req.host}`);
        });
})

module.exports = router;