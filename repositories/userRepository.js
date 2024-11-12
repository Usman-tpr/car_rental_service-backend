const Booking = require("../src/models/Booking");
const User = require("../src/models/User");
const bcrypt = require("bcrypt")


const create = async ( userData ) =>{
    const isAlreadyExist = await User.find({
        email:userData.email
    })
    console.log(isAlreadyExist)
    if(isAlreadyExist<0 || isAlreadyExist[0]){
        console.log("welcome")
        return null
    }
    else{
        const hashedPassword = await bcrypt.hash(userData.password, 10); 
        userData.password = hashedPassword;
        return User.create(userData);
    }

}

const findByEmail = async (email) => {
    return User.findOne({ email })
}
const findByToken = async (id) => {
    const mybookings = await Booking.find({
        ownerId: id
    }).populate("car").populate("userId");

    const user = await User.findById(id);
    
    return {
        user,
        mybookings
    };
}


module.exports = { create , findByEmail , findByToken}