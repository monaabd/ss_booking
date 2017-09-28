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
//*/
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + 'Page not found'})
});

app.listen(port);


console.log('RESTful API server started on: ' + port);