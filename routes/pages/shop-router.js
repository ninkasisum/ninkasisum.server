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

router.get('/shop', (req, res) => {
    const cookie = req.session['ninkasisum'];

    if (cookie) {
        let splitedDirname = __dirname.split('/');
        splitedDirname.pop();
        splitedDirname.pop();
        splitedDirname.push('views');
        splitedDirname.push('pages');
        const pagesPath = splitedDirname.join('/');

        console.log(pagesPath);

        res.sendFile(`${pagesPath}/shop.html`)
    }
});

module.exports = router;