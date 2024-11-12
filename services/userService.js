const userRepository = require("../repositories/userRepository");
const bcrypt = require("bcrypt")
const createUser = async( userData ) =>{
    return await userRepository.create(userData)
}
const authenticate = async ( userData ) =>{
    const user = await userRepository.findByEmail(userData.email)

    if( !user ){
        return null
    }

    const isPasswordValid = await bcrypt.compare( userData.password , user.password);

    if(!isPasswordValid) {
            return null
    }
    return user;
}

const getUser = async ( id ) =>{
    return await userRepository.findByToken(id)
}

module.exports = { createUser , authenticate , getUser }