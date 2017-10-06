'use strict';

module.exports = function(router) {
  var booking = require('../controllers/bookingController');

  // Minimalized code to use different functions on the same path
  router.route('/vehicles')
    .get(booking.list_all_vehicles)
    .post(booking.create_a_vehicle);

  router.route('/vehicles/:vehicleId')
    .get(booking.read_a_vehicle)
    .put(booking.update_a_vehicle)
    .delete(booking.delete_a_vehicle);

};
