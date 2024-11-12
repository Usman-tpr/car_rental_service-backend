const Booking = require("../src/models/Booking");

const Create = async ( data ) => {
    const newBooking = await Booking(data);
    return newBooking.save()
}

const findMyBookings = async ( userId ) => {
  return await Booking.find({userId}).populate("car").populate("userId").populate("ownerId")
}

const cancel = async (id ) =>{
    return await Booking.findByIdAndDelete(id)
} 
module.exports = { Create  , findMyBookings , cancel }