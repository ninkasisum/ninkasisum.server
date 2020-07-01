const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const redirect = require('heroku-ssl-redirect');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.use(redirect());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser);

app.get('/', (req, res) => {
    if (req.cookies['ninkasisum'])
    {
        res.setHeader("Content-Type", "text/html");
        res.sendFile(__dirname + '/views/pages/index.html');
    } else res.sendFile(__dirname + '/views/pages/login.html');
});

app.get('/login', (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.sendFile(__dirname + '/views/pages/login.html')
});
app.get('/shop', (req, res) => {
    if (req.cookies['ninkasisum'])
    {
        res.setHeader("Content-Type", "text/html")
        res.sendFile(__dirname + '/views/pages/shop.html')
    } else res.sendFile(__dirname + '/views/pages/login.html');
});

app.post('/api/login', (req, res) => {
    const user = req.body;
    const cookie = req.cookies['ninkasisum'];

    if (!cookie)
    {
        res.cookie('ninkasisum', user['Ea']);
        req.cookies['ninkasisum'] = user['Ea'];
    }

    res.redirect(`https://${req.host}`);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
