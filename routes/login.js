const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/login.html`)
});

module.exports = router;