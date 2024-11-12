// src/controllers/carController.js
const carService = require("../../services/carService");
const Car = require("../models/Car");

const addCar = async ( req, res, next ) => {
  try {
    const carData = req.body;

    if(req.files){
        carData.images = req.files.map(file => file.path)
    }
    carData.userId = req.user.id
    const newCar = await carService.createCar(carData);
    res.status(201).json({ success: true, data: newCar });
  } catch (error) {
    next(error);
  }
};


const getCars = async ( req , res , next ) =>{
  try {
    const allcars =  await carService.getCars()
       res.status(201).json({ success:true, data: allcars})
  } catch (error) {
    next(error)
  }
}

const getCarsById = async ( req , res , next ) =>{
  try {
     const car = await carService.getCar(req.params.id)
     res.status(201).json({ success:true , data: car})
  } catch (error) {
    next(error)
  }
}

const myCars = async ( req , res , next ) => {
  try {
    const userId = req.user.id
     const car = await carService.myCars(userId)
     res.status(201).json({ success:true , data: car})
  } catch (error) {
    next(error)
  }
}

const searchCars = async ( req , res , next ) => {
try {
  const searchText   =  req.query
  console.log(searchText)
  if(!searchText){
    console.log("here")
    const searchCars = await Car.find()
   return res.status(201).json({ success:true , data:searchCars})

  }
  else {
    const searchCars = await carService.findCars(searchText);
    res.status(201).json({ success:true , data:searchCars})

  }

} catch (error) {
  next(error)
}

}

const deleteProduct = async ( req , res, next ) => {
  try {
    const deleteProduct = await Car.findByIdAndDelete(req.params.id)
    res.status(201).json({ success:true , data:deleteProduct})
  } catch (error) {
    next(error)
  }
}
module.exports = { addCar , getCars , getCarsById , myCars , searchCars , deleteProduct };
