const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id: String,
    user_name: String,
    password: String,
    firstName: String,
    lastName :String ,
    emailId : String
}, {
    timestamps: true
});

module.exports = mongoose.model('users', UserSchema);