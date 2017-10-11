'use strict';

var mongoose = require('mongoose'),
  Vehicle = mongoose.model('Vehicle');

function validateCar(body, add){
  let car = body;
  if (add) delete car._id;
  car.year = Number(car.year);
  car.dagshyra = Number(car.dagshyra);
  return car;
}

exports.list_all_vehicles = function(req, res) {
  Vehicle.find({}, function(err, vehicle) {
    if (err)
      res.send(err);
    res.json(vehicle);
  });
};


exports.create_a_vehicle = function(req, res) {
  let validCar = validateCar(req.body, true);
  var new_vehicle = new Vehicle(validCar);
  new_vehicle.save(function(err, vehicle) {
    if (err)
      console.log(err);
    else
    console.log("Vehicle saved", vehicle);
  });
};


exports.read_a_vehicle = function(req, res) {
  Vehicle.findById(req.params.vehicleId, function(err, vehicle) {
    if (err)
      res.send(err);
    res.json(vehicle);
  });
};


exports.update_a_vehicle = function(req, res) {
  let validCar = validateCar(req.body, false);
  Vehicle.findOneAndUpdate({_id: validCar._id}, validCar, {new: true}, function(err, vehicle) {
    if (err)
      console.log(err);
    else
    console.log("Vehicle updated", vehicle);
  });
};


exports.delete_a_vehicle = function(req, res) {
  Vehicle.remove({
    _id: req.params.vehicleId
  }, function(err, vehicle) {
    if (err)
      res.send(err);
    res.json({ message: 'Vehicle successfully deleted' });
  });
};
