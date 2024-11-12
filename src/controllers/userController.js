// src/controllers/userController.js
const userService = require("../../services/userService");
const { generateToken } = require("../../utills/tokenUtills");
const ERROR_MESSAGES = require("../constants/errorMessages");

const userValidator = require("../../validators/userValidator")

const signupUser = async (req, res, next) => {

  const userData = req.body;
  const { error } = userValidator(userData)
  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(201).json({ success: false, errors: errorMessages });
  }
  else {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json({ success: true, data: newUser })
    } catch (error) {
      next(error)
    }
  }

}
const loginUser = async (req, res, next) => {
  try {
    const user = await userService.authenticate(req.body);
    if (!user) {
      return res.status(400).json({ message: "Invalid Email Or Password" });
    }
    const token = generateToken(user._id);
    res.status(200).json({ success: true, token });
  } catch (error) {
    next(error);
  }
};

const getUser = async (req , res , next) => {
  try {
    const user = await userService.getUser(req.user.id)
    res.status(200).json({success:true , data:user})
  } catch (error) {
    next(error)
  }
}

module.exports = { loginUser, signupUser , getUser};
