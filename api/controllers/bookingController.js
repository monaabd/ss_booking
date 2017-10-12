'use strict';

var mongoose = require('mongoose'),
  Vehicle = mongoose.model('Vehicle');

function validateCar(body, add){
  let car = body;
  if (add) delete car._id;
  car.year = parseInt(car.year) || 0;
  car.dagshyra = parseInt(car.dagshyra) || 0;;
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
      res.send("Error updating vehichle:", err);
    res.json("Changes saved to database");
  });
}

exports.book_a_vehicle = function(req, res) {
console.log("Req.body", JSON.stringify(req.body));
  Vehicle.findOneAndUpdate(
    {_id: req.params.vehicleId},
    { $set: { "dates.date": [...req.body] } },
    {new: true},
    function(err, vehicle) {
    if (err)
      console.log(err);
    console.log("vehicle booked");
  });
};


exports.delete_a_vehicle = function(req, res) {
  console.log("req.params",req.params.vehicleId);
  let delId = JSON.parse(req.params.vehicleId);
  Vehicle.remove({
    _id: delId
  }, function(err, vehicle) {
    if (err)
      res.send("Error updating vehichle:", err);
    res.json("Changes saved to database");
  });
};
