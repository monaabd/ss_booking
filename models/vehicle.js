let mongoose = require('mongoose');

// Article Schema
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
    model:{
    type: String,
   
  },
  dagshyra:{
    type: Number,
    required: true
  },

  imgLink:{
    type: String,
   
  },
    kommentarer:{
    type: String,
    
  },
    fuel:{
    type: Number,
    
  },
});

let Vehicle = module.exports = mongoose.model('Vehicle', vehicleSchema);