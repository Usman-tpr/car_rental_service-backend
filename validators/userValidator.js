// src/validators/userValidator.js
const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "string.empty": "Name is required.",
    "string.min": "Name should have at least 3 characters.",
    "string.max": "Name should have at most 30 characters.",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Please enter a valid email address.",
    "string.empty": "Email is required.",
  }),
  password: Joi.string().min(6).max(30).required().messages({
    "string.min": "Password should have at least 6 characters.",
    "string.max": "Password should have at most 30 characters.",
    "string.empty": "Password is required.",
  }),
  phone: Joi.string().min(11).max(13).required().messages({
    "string.min": "Number be must 11 or 13 numbers",
    "string.max":  "Number be must 11 or 13 numbers",
    "string.empty": "Number is required.",
  }),
});

const validateUser = (data) => {
  return userSchema.validate(data, { abortEarly: false });
};

module.exports = validateUser;
