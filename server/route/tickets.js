const express = require("express");
const router = express.Router();
const ticketsPoint = require("../controllers/ticketsPoint");

//localhost:8000/tickets/booking
router.post("/booking", ticketsPoint.booking1);

//localhost:8000/tickets/cancelBooking
router.post("/cancelBooking", ticketsPoint.cancelBooking);

//localhost:8000/tickets/showMyBookingTicket
router.post("/showMyBookingTicket", ticketsPoint.showMyBookingTicket);

//localhost:8000/tickets/payment
router.post("/payment", ticketsPoint.payment);

module.exports = router;
