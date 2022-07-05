const mongoose = require('mongoose');

<<<<<<< HEAD
const UserSchema = mongoose.Schema({
    id: String,
    user_name: String,
    password: String,
    firstName: String,
    lastName :String ,
    emailId : String
}, {
    timestamps: true
=======
  MobileNumber: {
    type: Number,
    require: true,
  },

  Email: {
    type: String,
    require: true,
  },
  Username: {
    type: String,
    require: true,
  },
  password: {
    type: Date,
    require: true,
  },
  confirmPassword: {
    type: String,
    require: true,,
  },

  reg_date: {
    type: Date,
    default: Date.now,
  },
>>>>>>> 43504d856b86c974a3bebc05314de61ff9c7b94f
});

module.exports = mongoose.model('users', UserSchema);