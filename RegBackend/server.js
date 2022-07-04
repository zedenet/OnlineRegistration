const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routUrls = require("./routes/routes");
const cors = require("cors");
const port = 4000;

dotenv.config();

mongoose.connect(process.env.DB_CONNECTION_STRING, () => {
  console.log("Database connected succesfully");
});

app.use(express.json());
app.use(cors());
app.use("/registration", routUrls);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
