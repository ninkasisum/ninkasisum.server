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


router.post('/api/user', userController.api.find)
router.post('/api/user/create', userController.api.create)
router.put('/api/user/update', userController.api.update)
router.delete('/api/user/delete', userController.api.delete)
router.get('/api/user/list', userController.api.list)

module.exports = router;