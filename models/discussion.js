const mongoose = require('mongoose');

const discussion = mongoose.Schema({
    id : String,
    name : String,
    location : String,
    moderator : String
});

module.exports = mongoose.model('discussion', discussion);