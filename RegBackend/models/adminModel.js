const mongoose = require("mongoose");
const studentTemplete = new mongoose.Schema({
  Fullname: {
    type: String,
    require: true,
  },

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
});

module.exports = mongoose.model("admin", adminTemplete);
