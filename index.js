const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const redirect = require('heroku-ssl-redirect');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

function sessionHandlerBuilder(){
    const memory = new Object();
    return {
        addUser(cookie, user)
        {
            memory[cookie] = user;
        },
        getUser(cookie)
        {
            return memory[cookie];
        }
    };
    
}
const sessionHandler = sessionHandlerBuilder();

app.use(redirect());
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(`COOKIE: ${req.headers.cookie}`);
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/index.html`);
});

app.get('/login', (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/login.html`)
});
app.get('/shop', (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/shop.html`);
});

app.post('/api/login', (req, res) => {
    const user = req.body;
    const cookie = user['Ea'];
    sessionHandler.addUser(cookie, user);
    res.setHeader('Set-Cookie', `ninkasisum=${cookie}; HttpOnly;`);
    res.redirect(`https://${req.host}`);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));