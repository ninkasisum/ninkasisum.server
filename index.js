const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const redirect = require('heroku-ssl-redirect');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
let session;

app.use(redirect());
app.use(session({secret: '123456',saveUninitialized: true,resave: true}));
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    session = req.session;
    const path = (session.id)? 'index': 'login';
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/${path}.html`);
});

app.get('/login', (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/login.html`)
});
app.get('/shop', (req, res) => {
    session = req.session;
    const path = (session.id)? 'shop': 'login';
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/${path}.html`);
});

app.post('/api/login', (req, res) => {
    session.id = res.body['Ea'];
    res.redirect(`https://${req.host}`);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));