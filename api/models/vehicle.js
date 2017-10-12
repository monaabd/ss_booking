'use strict';
let mongoose = require('mongoose');

// Vehicle Schema
let vehicleSchema = mongoose.Schema({
  name:{
    fordonstyp: String,
  },
  requiredDrivingLicense:{
    type: String,
  },
    brand:{
    type: String,
  },
    model:{
    type: String,
  },
    year:{
    type: Number,
  },
    gearbox:{
    type: String,
  },
  dagshyra:{
    type: Number,
  },
  imgLink:{
    type: String,
    default: '../media/car.jpg',
  },
    kommentarer:{
    type: Object,
  },
    fuel:{
    type: String,
  },
    dates: {
      availability: Boolean,
      date:[{from: Number, to: Number}]
    }
});

let Vehicle = module.exports = mongoose.model('Vehicle', vehicleSchema);
