// src/routes/carRoutes.js
const express = require("express");
const { addCar , getCars , getCarsById , myCars , searchCars , deleteProduct } = require("../src/controllers/carController");
const upload = require("../src/config/multerConfig")
const auth = require("../src/middleware/auth")
const router = express.Router();

router.post("/add",upload.array("images" , 5) ,auth,  addCar); 
router.get("/get-cars",  getCars); 
router.get("/get-car/:id" , getCarsById)
router.get("/my-cars" ,auth, myCars)
router.get("/search" ,searchCars)
router.delete("/:id" , deleteProduct)
module.exports = router;
