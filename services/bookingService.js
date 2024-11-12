const bookingRepository = require("../repositories/bookingRepository");

const Create = async (data) => {
    return await bookingRepository.Create(data)
}

const myBookings = async (userId) => {
    return await bookingRepository.findMyBookings(userId)
}

const cancel = async (id) => {
    return await bookingRepository.cancel(id)
}

module.exports = { Create , myBookings , cancel }