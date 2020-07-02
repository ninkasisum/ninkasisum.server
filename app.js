const express = require('express');
const path = require('path');
const app = express();
const redirect = require('heroku-ssl-redirect');

const routers = [
    require('./routes/api/session-api-router'),
    require('./routes/api/user-api-router'),
    require('./routes/pages/home-router'),
    require('./routes/pages/login-router'),
    require('./routes/pages/shop-router')
]

routers.forEach((router) => {
    app.use(router);
})

const session = require('express-session');
app.use(session({
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

app.use(redirect());
app.use(express.static(path.join(__dirname, '/public')));
app.listen((process.env.PORT || 5000), () => {
    console.log(`Server up and running . . .`)
});