const { Booking } = require('../models/index');

class BookingRepository {

    async craete(data){
        
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            console.log("something went wromg in repository layer");
            throw error
        }
    }
}


module.exports = BookingRepository