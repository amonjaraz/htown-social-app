const mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema ({
    username: {
        type: String,
        require: true,
        minlength: 3,
        unique: true
    },
    DOB: {
        type: Date,
        require: true,
    },
    summary: {
        type: String,
        require: true,
        minlength: 1
    }
});

var Profile = mongoose.model('Profile', ProfileSchema);

module.exports = {
    Profile: Profile
};