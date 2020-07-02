const express = require('express');
const router = express.Router();

const sessionController = require('../controllers/sessionController');

router.get('/', (req, res) => {
    sessionController.find(req.session['ninka'])
        .then((response) => {
            const path = (response)? 'index':'login';
            res.setHeader("Content-Type", "text/html");
            const fullpath = __dirname.replace("/routes", "");
            res.sendFile(`${fullpath}/views/pages/${path}.html`);
        });
});

module.exports = router;