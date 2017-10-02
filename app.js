var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),    
  Car = require('./models/carModel.js'),
    startTid,
    slutTid

startTid = Date.now()

// Koppla upp mot en databas
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/cardb', {
        useMongoClient: true
    });

//To create and save our new cars for example car19
  var car19 = new Car({
     
    "fordonstyp": "test",
    "requiredDrivingLicense":"B",
    "brand": "test",
    "model": "test",
    "year": 2017,
    "gearbox": "Manual",
    "dagshyra": 200,
    //"imgLink": "",
    //"kommentarer": Object,
    //"fuel": String
});
 
//save
 car19.save(function(err, Car){
  if(err) return console.error(err);
    console.log(car19.fordonstype); 
    //or res.json(task); 
 });

//update car19
car19.findOneAndUpdate(
{ "year": { $: 2015 } }, 
{ superUser: true }, 
{ new: true },     // Returnerar den uppdaterade versionen av doc. 
function(err, result) {
            if (!err)
                console.log(result);
});

//Remove (med filter på _id)
car19.remove({ _id: "59b78531ac278b3654a2a16a" }, function(err, result) {
    if (!err)
        console.log("Användaren raderades utan problem");
});



// Lista alla medlemmar. Namn samt avgift per kvm.
/*Car.find({}, function (err, data) {
    if (err)
        console.log(err)
    else
        //console.log("Medlemslista, namn och avgift/kvm")
        // Sortera arrayen.
    
        data.sort(function (a, b) {
            return a.avgiftPerKvm() - b.avgiftPerKvm();
        });
        data.forEach(function(medlem){
            console.log(medlem.fullName() + ", avgift: " + medlem.avgiftPerKvm().toFixed(2))
            // .toFixed() ger antal decimaler.
        })
})*/
slutTid = Date.now()
/*let millis = slutTid - startTid
console.log("Körningen tog: " + millis + " ms")
*/

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + 'Page not found'})
});

app.listen(port);


console.log('RESTful API server started on: ' + port);