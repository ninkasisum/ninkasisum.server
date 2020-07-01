const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => res.sendFile(__dirname + '/views/pages/index.html'));
app.get('/login', (req, res) => res.sendFile(__dirname + '/views/pages/login.html'));
app.get('/shop', (req, res) => res.sendFile(__dirname + '/views/pages/shop.html'));

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
