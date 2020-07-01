const express = require('express');
const session = require('express-session');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

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

const loggedUsers = {};
app.post('/api/login', (req, res) => {
    if (typeof loggedUsers[req.session['ninkaCookie']] !== 'object') {

        const body = JSON.parse(req.body);
        const cookie = body['Ea'];
        loggedUsers[cookie] = body;
        req.session['ninkaCookie'] = cookie;
    }

    res.redirect('/');
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
