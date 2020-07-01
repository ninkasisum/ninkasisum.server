const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const redirect = require('heroku-ssl-redirect');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
let sess;
const sessionUsers = {};

var jsonParser = bodyParser.json();

app.use(redirect());
app.use(session({secret: '123456',saveUninitialized: true,resave: true}));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    const path = (req.session['ninka'])? 'index': 'login';
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/${path}.html`);
});

app.get('/login', (req, res) => {
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/login.html`)
});
app.get('/shop', (req, res) => {
    const path = (req.session['ninka'])? 'shop': 'login';
    res.setHeader("Content-Type", "text/html")
    res.sendFile(`${__dirname}/views/pages/${path}.html`);
});

app.post('/api/login', jsonParser,  (req, res) => {  
    const user = req.body
    sessionUsers[user['Ea']] = user; 
    req.session['ninka'] = user['Ea']
    res.redirect(`https://${req.host}`);
});

app.get('/api/user', (req,res)=>  {
    const id = req.session['ninka']
    res.json(JSON.stringify({
        id,
        user: sessionUsers[id]
    }))
})

app.post('api/logout', (req,res)=>{
    sessionUsers[req.session['ninka']] = null;
    req.session.destroy()
    res.redirect(`https://${req.host}`);
})

app.listen(PORT, () => console.log(`Listening on ${PORT}`));