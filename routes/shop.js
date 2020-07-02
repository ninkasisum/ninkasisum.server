const express = require('express');
const router = express.Router();

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