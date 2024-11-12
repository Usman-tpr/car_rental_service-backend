// src/services/carService.js
const carRepository = require("../repositories/carRepository");

const createCar = async (carData) => {
  return await carRepository.create(carData);
};

const getCars = async () => {
  return await carRepository.find()
}
const getCar = async (id) => {
 return await carRepository.findOne(id)
}
const myCars = async (userId) => {
  return await carRepository.findMyCars(userId)
}
const findCars = async (searchText) => {
  return await carRepository.findCars(searchText)
}
module.exports = { createCar  , getCars, getCar , myCars , findCars};
