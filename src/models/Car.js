// src/models/Car.js
const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "CarUser" , required: true },
  model: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  available: { type: Boolean, default: true },
  condition: { type:String , required : true} ,
  location: { type:String , required : true} ,
  description:{ type:String  },
  phone:{ type:String  },
  images: [{ type: String }], // Array of image paths or URLs
}, { timestamps: true });

module.exports = mongoose.model("Car", carSchema);
