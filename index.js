const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res, next) => {
    if (req.hostname !== 'localhost' && req.get('X-Forwarded-Proto') !== 'https') {
      return res.redirect(`https://${req.hostname}${req.url}`)
    }
    return next()
  })

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use(session({
    key: '123456',
    secret: 'qwerty',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/pages/index.html'));
app.get('/login', (req, res) => res.sendFile(__dirname + '/views/pages/login.html'));
app.get('/shop', (req, res) => res.sendFile(__dirname + '/views/pages/shop.html'));

const loggedUsers = {};
app.post('/api/login', (req, res) => {
    if (typeof loggedUsers[req.session['ninkaCookie']] !== 'object') {

        const body = req.body
        const cookie = body['Ea'];
        loggedUsers[cookie] = body;
        req.session['ninkaCookie'] = cookie;
    }

    res.redirect(req.host);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
