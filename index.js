const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const redirect = require('heroku-ssl-redirect');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

const loggedUsers = {}; // change this to memory storage

app.use(redirect());
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const file = (loggedUsers[req.headers.cookie])? 'index': 'login';
    res.setHeader("Content-Type", "text/html")
    res.sendFile(__dirname + `/views/pages/${file}.html`);
});

app.get('/login', (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.sendFile(__dirname + '/views/pages/login.html')
});
app.get('/shop', (req, res) => {
    const file = (loggedUsers[req.headers.cookie])? 'shop': 'login';
    res.setHeader("Content-Type", "text/html")
    res.sendFile(__dirname + `/views/pages/${file}.html`);
});

app.post('/api/login', (req, res) => {
    const user = req.body;
    const cookie = user['Ea'];
    loggedUsers[cookie] = user;
    res.setHeader('Set-Cookie', cookie);
    res.redirect(`https://${req.host}`);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));