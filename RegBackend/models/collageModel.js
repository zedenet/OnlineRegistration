const mongoose = require("mongoose");
const collageTemplete = new mongoose.Schema({
  collageName: {
    type: String,
    require: true,
  },

  collageCode: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("collage", collageTemplete);
