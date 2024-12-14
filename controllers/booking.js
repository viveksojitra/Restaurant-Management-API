const booking = require("../models/booking");

const getBooking = async (req, res) => {
    try {
        console.log(req.params.bookingId);

        // populate [ customers, order, table ]
        const BOOKING = await booking.findById(req.params.bookingId).populate("customers").populate("table").lean();

        console.log(BOOKING);
        res.status(200).json(BOOKING);
    } catch (error) {
        res.status(400).json(error);
    };
}

const getBookings = async (req, res) => {
    try {
        const BOOKING = await booking.find({});

        res.status(200).json(BOOKING);
    } catch (error) {
        res.status(400).json(error);
    };
}

const postBooking = async (req, res) => {
    try {
        const { dateOfBooking, members } = req.body;

        const newBooking = await new booking({
            dateOfBooking,
            members,
        })

        await newBooking.save();

        res.status(200).json(newBooking);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getBookings,
    postBooking,
    getBooking
};