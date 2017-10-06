// Detta skapar ett rest api, för att starta server kör man server.js i consolen

var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Vehicle = require('./api/models/vehicle'),
  bodyParser = require('body-parser');

  app.use(express.static(__dirname + '/public'));

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/vehiclesDB');
let db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
  console.log(err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/bookingRoutes'); //importing route
routes(app); //register the route


app.listen(port)
console.log('RESTful API server started on: ' + port);;

// Ger felmeddelande när man skriver in en felaktig path

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});