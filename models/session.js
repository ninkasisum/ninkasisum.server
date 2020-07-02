const mongoose = require('mongoose');

module.exports = mongoose.model('session',
    new mongoose.Schema({
        _id: { type: String, required: true },
        user: { type: Object, required: true },
    })
);