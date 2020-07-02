const express = require('express');
const session = require('express-session');
const redirect = require('heroku-ssl-redirect');

const path = require('path');
const app = express();
const sessionConfig = session({ secret: '123456',saveUninitialized: true,resave: true });
const public = express.static(path.join(__dirname, '/public'));

app.use(redirect());
app.use(sessionConfig);
app.use(public);
app.use(require('./routes/api/session'));
app.use(require('./routes/home'));
app.use(require('./routes/login'))
app.use(require('./routes/shop'));

app.listen((process.env.PORT || 5000), () => {
    console.log(`Server up and running . . .`)
});