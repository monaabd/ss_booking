'use strict';

var mongoose = require('mongoose'),
  Vehicle = mongoose.model('Vehicle');

/*
Because the input fields will return strings and not number we need to pass the object
through this validating before creating a new model.
*/
function validateCar(body, add){
  let car = body;
  if (add) delete car._id;
  car.year = parseInt(car.year) || 0;
  car.dagshyra = parseInt(car.dagshyra) || 0;;
  return car;
}

// This runs when making a GET request, it sends a list of all vehicles in the database
exports.list_all_vehicles = function(req, res) {
  Vehicle.find({}, function(err, vehicle) {
    if (err)
      res.send(err);
    res.json(vehicle);
  });
};

// This runs when making a POST request, it adds a vehicle object to the database
exports.create_a_vehicle = function(req, res) {
  let validCar = validateCar(req.body, true);
  var new_vehicle = new Vehicle(validCar);
  new_vehicle.save(function(err, vehicle) {
    if (err)
      res.send(err);
    res.json(vehicle);
  });
};

//This is not used, it can be used to get only one vehicle from the database
exports.read_a_vehicle = function(req, res) {
  Vehicle.findById(req.params.vehicleId, function(err, vehicle) {
    if (err)
      res.send(err);
    res.json(vehicle);
  });
};

// This runs when making a PUT request, it will replace the database vehicle with a updated version
exports.update_a_vehicle = function(req, res) {
  let validCar = validateCar(req.body, false);
  Vehicle.findOneAndUpdate({_id: validCar._id}, validCar, {new: true}, function(err, vehicle) {
    if (err)
      res.send("Error updating vehichle:", err);
    res.json("Changes saved to database");
  });
}

// This runs when making a PUT request, it saves the dates when a user is booking a vehicle
exports.book_a_vehicle = function(req, res) {
  Vehicle.findOneAndUpdate(
    {_id: req.params.vehicleId},
    { $set: { "dates.date": [...req.body] } },
    {new: true},
    function(err, vehicle) {
    if (err)
      res.send(err);
    res.json(vehicle);
  });
};

/* This runs when making a DELETE request,
   is compares the id passed in the parameter with all the vehicles id in the database and removes the match */
exports.delete_a_vehicle = function(req, res) {
  let delId = JSON.parse(req.params.vehicleId);
  Vehicle.remove({
    _id: delId
  }, function(err, vehicle) {
    if (err)
      res.send("Error updating vehichle:", err);
    res.json("Changes saved to database");
  });
};
