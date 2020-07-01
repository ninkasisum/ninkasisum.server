const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const redirect = require('heroku-ssl-redirect');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
let sess;

var jsonParser = bodyParser.json();
app.use(redirect());
app.use(session({secret: '123456',saveUninitialized: true,resave: true}));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    sess = req.session;
    const path = (sess['ninka'])? 'index': 'login';
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/${path}.html`);
});

app.get('/login', (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/login.html`)
});
app.get('/shop', (req, res) => {
    sess = req.session;
    const path = (sess['ninka'])? 'shop': 'login';
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/${path}.html`);
});

app.post('/api/login', jsonParser,  (req, res) => {
    sess['ninka'] = req.body['Ea'];
    res.redirect(`https://${req.host}`);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));