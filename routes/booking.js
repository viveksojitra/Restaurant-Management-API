const express = require('express');
const routes = express.Router();
const booking = require("../controllers/booking");

routes.get("/", booking.getBookings);
routes.post("/", booking.postBooking);
routes.get("/:bookingId", booking.getBooking);

module.exports = routes