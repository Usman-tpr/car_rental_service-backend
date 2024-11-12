// src/repositories/carRepository.js
const Car = require("../src/models/Car");

const create = async (carData) => {
  const car = new Car(carData);
  return await car.save();
};

const find = async () => {
  return await Car.find()
}

const findOne = async (id) => {
  return await Car.findById(id)
}

const findMyCars = async (userId) => {
  return await Car.find({ userId : userId})
}

const findCars = async (searchParams) => {
  const { model, brand, price , condition , location } = searchParams;

  // Create a query object
  const query = {};

  // Add filters based on the presence of the parameters
  if (model) {
      query.model = { $regex: model, $options: "i" }; // Case-insensitive search
  }

  if (brand) {
      query.brand = { $regex: brand, $options: "i" }; // Case-insensitive search
  }
  if(location){
          query.location = { $regex: location , $options:"i"}
  }

  if (price) {
    const priceParts = price.split('-');
    const priceValue = parseFloat(priceParts[1]);

    // Check if the price condition is 'below' or 'above'
    if (priceParts[0] === 'below' && !isNaN(priceValue)) {
        query.price = { $lt: priceValue }; // Filter for price less than priceValue
    } else if (priceParts[0] === 'above' && !isNaN(priceValue)) {
        query.price = { $gt: priceValue }; // Filter for price greater than priceValue
    }
}
    if(condition) {
      query.condition = { $regex: condition , $options:"i"  }
    }
  // Execute the query
  return await Car.find(query);
};


module.exports = { create , find , findOne , findMyCars , findCars };
