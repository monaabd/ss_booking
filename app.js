const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');

// Init App
const app = express();

mongoose.connect(config.database);
let db = mongoose.connection;

// Check connection
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
  console.log(err);
});


// Bring in Models
let Vehicle = require('./models/vehicle');


// Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// where to find files.
app.use(express.static('public'));

/////////// ROUTES ///////////////

// Home Route
app.get('/', function(req, res){
  Vehicle.find({}, function(err, vehicles){
      res.render('index', {
        title:'Vehicles',
        vehicles: vehicles
      });
      });
});

// Vehicles Route
app.get('/vehicles', function(req, res){
  Vehicle.find({}, function(err, vehicles){
      res.render('vehicles', {
        title:'Vehicles',
        vehicles: vehicles
      });
      });
});

// Book a vehicle Route
app.get('/book', function(req, res){
  Vehicle.find({}, function(err, vehicles){
      res.render('book', {
        title:'Choose date',
        vehicles: vehicles
      });
      });
});

// ADD POST request for a new booked vehicle.
app.post('/book', function(req, res){
  console.log('submitted');
  return;
});

// Admin Route
app.get('/admin', function(req, res){
  Vehicle.find({}, function(err, vehicles){
      res.render('admin', {
        title:'Admin page',
        vehicles: vehicles
      });
      });
});

// Edit Route
app.get('/edit', function(req, res){
  Vehicle.find({}, function(err, vehicles){
      res.render('edit', {
        title:'Edit vehicle',
        vehicles: vehicles
      });
      });
});

// ADD POST request for editing an existing vehicle.
app.post('/edit', function(req, res){
  console.log('submitted');
  return;
});


// Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000...');
});
