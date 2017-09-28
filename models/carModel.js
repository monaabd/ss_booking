var mongoose = require('mongoose'),
    Schema = mongoose.Schema

var carSchema = new Schema({
    "fordonstyp": String,
    "requiredDrivingLicense": String,
    "brand": String,
    "model": String,
    "year": Number,
    "gearbox": String,
    "dagshyra": Number,
    "imgLink": String,
    "kommentarer": Object,
    "fuel": String
});


/*carSchema.methods.fullName = function(){
    return this.name.first + " " + this.name.last
}
memberSchema.methods.avgiftPerKvm = function() {
    var apk = this.lgh.avgift/this.lgh.yta
    return apk
}*/

module.exports = mongoose.model('Car',carSchema)