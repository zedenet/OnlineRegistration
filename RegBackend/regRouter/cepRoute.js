const express = require("express");
const router = express.Router();

const {
  getseps,
  getsep,
  addsep,
  editsep,
  deletesep,
} = require("../controllers/cepController");


module.exports = router;
