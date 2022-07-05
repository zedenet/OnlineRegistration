<<<<<<< HEAD
const express = require('express');
const cors = require("cors");

// create express app
const app = express(); 
app.use(cors())
// ... Your routes and methods here
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./Routers/adminRoute.js')(app);
require('./Routers/cepRoute.js')(app);
require('./Routers/financeRoute.js')(app);
require('./Routers/registrarRoute.js')(app);
require('./Routers/studentRoute.js')(app);
// listen for requests
app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});
=======
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const PORT = 4000;
dotenv.config();

app.listen(PORT, console.log("Server done start for port: " + PORT));
>>>>>>> 43504d856b86c974a3bebc05314de61ff9c7b94f
