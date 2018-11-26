var mongoose = require('mongoose');

mongoose.Promise = global.Promise; //callbacks vs promises. Set to promises.
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/HTownSocialApp', {useNewUrlParser: true});

module.exports = {
    mongoose: mongoose
};