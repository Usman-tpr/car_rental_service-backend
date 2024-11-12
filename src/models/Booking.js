const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    userId : { type:mongoose.Schema.Types.ObjectId , ref:"CarUser"},
    ownerId:{ type:mongoose.Schema.Types.ObjectId , ref:"CarUser"},
    car : { type : mongoose.Schema.Types.ObjectId  , ref:"Car"},
    booking: { type: String , default:true}
} , { timestamps:true});

module.exports = mongoose.model("CarBooking" , bookingSchema)