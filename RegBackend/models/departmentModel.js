const mongoose = require("mongoose");
const departmentTemplete = new mongoose.Schema({
  departmentName: {
    type: String,
    require: true,
  },

  departmentCode: {
    type: Number,
    require: true,
  },
  collageName: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("department", departmentTemplete);
