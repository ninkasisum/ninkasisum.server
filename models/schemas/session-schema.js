const mongoose = require('mongoose');
const User = require('../user');

const sessionSchema = new mongoose.Schema({
    user: { 
        type: User,
        required: true
    },
});

module.exports = mongoose.model('session', sessionSchema);