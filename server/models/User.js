const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema ({
    email: {
        type: String,
        required: true,
        minlength: 5,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 5
    },
    username: {
        type: String,
        require: true,
        minlength: 3,
        unique: true
    },
});

var User = mongoose.model('User', UserSchema);

module.exports = {
    User: User
};