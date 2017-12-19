// Set up ========================
var express  = require('express');
var app      = express();                        // Create our app w/ express
var mongoose = require('mongoose');              // Mongoose for mongodb
var morgan   = require('morgan');                // Log requests to the console (express4)
var bodyParser = require('body-parser');         // Pull information from HTML POST (express4)
var methodOverride = require('method-override'); // Simulate DELETE and PUT (express4)
var database = require('./modules/database');
var port     = process.env.PORT || 8888;         // Set the port
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
  console.log('new connection');

  socket.on('add-customer', function(customer) {
    io.emit('notification', {
      message: 'new customer',
      customer: customer
    });
  });
});

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