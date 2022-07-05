const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = 4000;
dotenv.config();

app.listen(PORT, console.log("Server done start for port: " + PORT));
