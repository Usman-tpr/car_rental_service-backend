const Booking = require("../models/Booking");
const bookingService = require("../../services/bookingService")
const create = async ( req , res , next ) => {
    try {
        const data = {
            ...req.body,
            userId:req.user.id
        }
        const newBooking = await bookingService.Create(data)
        res.status(201).json({ succes:true , data:newBooking})
    } catch (error) {
        next(error)
    }
}

const myBookings = async ( req , res , next ) => {
    try {
        const myBookings = await bookingService.myBookings(req.user.id)
        res.status(201).json({ success:true , data:myBookings})
    } catch (error) {
        next(error)
    }
}
const cancel = async ( req , res , next ) => {
    try {
        const myBookings = await bookingService.cancel(req.params.id)
        console.log(myBookings)
        res.status(201).json({ success:true , data:myBookings})
    } catch (error) {
        next(error)
    }
}

module.exports = { create , myBookings , cancel }