'use strict';
module.exports = function(app) {
  var booking = require('../controllers/bookingController');

  app.route('/cars')
    .get(booking.list_all_cars)
    .post(booking.create_a_car);


  app.route('/cars/:carId')
    .get(booking.read_a_car)
    .put(booking.update_a_car)
    .delete(booking.delete_a_car);
};
