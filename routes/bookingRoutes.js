const express = require("express");
const router = express.Router()
const auth = require("../src/middleware/auth")
const { create , myBookings , cancel } = require("../src/controllers/bookingController")

router.post("/add" , auth , create )
router.get("/my-bookings" , auth , myBookings )
router.delete("/cancel/:id" , cancel )

module.exports = router