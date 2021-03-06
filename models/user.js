const mongoose = require('mongoose');

const user = mongoose.Schema({
    facebookId : String,
    token : String,
    name : String,
    location : String,
    image : String,
    moderator : String
});

module.exports = mongoose.model('user', user);