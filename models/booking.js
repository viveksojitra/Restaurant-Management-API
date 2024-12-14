const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    dateOfBooking: {
        type: String,
        required: true
    },
    members: {
        type: Number,
        required: true
    },
    customers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customer",
        required: true
    },
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Table",
        required: true
    },
});

module.exports = mongoose.model("Booking", bookingSchema);
