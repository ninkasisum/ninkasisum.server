const express = require('express');
const userController = require('../../controllers/user-controller');
const router = express.Router();
router.use(express.json());

const session = require('express-session');
router.use(session({
    cookieName: 'ninkasisum',
    secret: "Qwerty123456",
    resave: false,
    saveUninitialized: true,
    httpOnly: true,
    secure: true,
    ephemeral: true,
    cookie: { maxAge: 60000 }
 }));


router.get('/api/user', userController.find)
router.post('/api/user/create', userController.create)
router.put('/api/user/update', userController.update)
router.delete('/api/user/delete', userController.delete)
router.get('/api/user/list', userController.list)

module.exports = router;