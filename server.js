// Detta skapar ett rest api, för att starta server kör man server.js i consolen

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Car = require('./api/models/bookingModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Cardb');


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
