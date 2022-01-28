const express = require("express");
const router = express.Router();
const aviaTicketsPoint = require("../controllers/aviaTicketsPoint");

//localhost:8000/aviaTickets/booking
router.post("/booking", aviaTicketsPoint.booking);

//localhost:8000/aviaTickets/cancelBooking
router.post("/cancelBooking", aviaTicketsPoint.cancelBooking);

//localhost:8000/aviaTickets/showMyBookingAviaTicket
router.post("/showMyBookingAviaTicket", aviaTicketsPoint.showMyBookingAviaTicket);

module.exports = router;
