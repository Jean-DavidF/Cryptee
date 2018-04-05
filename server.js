// Set up ========================
const express  = require('express');
const app      = express();                        // Create our app w/ express
const mongoose = require('mongoose');              // Mongoose for mongodb
const morgan   = require('morgan');                // Log requests to the console (express4)
const bodyParser = require('body-parser');         // Pull information from HTML POST (express4)
const methodOverride = require('method-override'); // Simulate DELETE and PUT (express4)
const database = require('./modules/database');
const port     = process.env.PORT || 8888;         // Set the port
const server = require('http').Server(app);
const nodemailer = require('nodemailer');
const constants = require('./modules/utils/constants.js');

app.use(express.static(__dirname + '/public'));

// Configuration ===============================================================
mongoose.connect(database.url);     // Connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public'));                 // Set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // Log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // Parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // Parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // Parse application/vnd.api+json as json
app.use(methodOverride());

// Routes ======================================================================
require('./modules/routes/currencies.js')(app);
require('./modules/routes/contact-form.js')(app);


// Headers =====================================================================
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

// Listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port : " + port);