// src/validators/carValidator.js
const Joi = require("joi");

const carSchema = Joi.object({
  make: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.number().integer().min(1886).required(),
  pricePerDay: Joi.number().positive().required(),
  available: Joi.boolean(),
});

module.exports = { carSchema };
