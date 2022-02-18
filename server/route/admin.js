const express = require("express");
const router = express.Router();
const adminPoint = require("../controllers/adminPoint");

//localhost:8000/admin/showAviaTicketsAdmin
router.post("/showAviaTicketsAdmin", adminPoint.showAviaTicketsAdmin);

//localhost:8000/admin/showTicketsAdmin
router.post("/showTicketsAdmin", adminPoint.showTicketsAdmin);


module.exports = router;
   