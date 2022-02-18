const express = require("express");
const router = express.Router();
const ticketsPoint = require("../controllers/ticketsPoint");
const cors = require("cors")
const bodyParser = require("body-parser")

// app.use(cors())


//localhost:8000/tickets/booking
router.post("/booking", cors(), ticketsPoint.booking1);

//localhost:8000/tickets/cancelBooking
router.post("/cancelBooking", ticketsPoint.cancelBooking);

//localhost:8000/tickets/showMyBookingTicket
router.post("/showMyBookingTicket", ticketsPoint.showMyBookingTicket);

//localhost:8000/tickets/payment
router.post("/payment",cors(), ticketsPoint.payment);

module.exports = router;
    