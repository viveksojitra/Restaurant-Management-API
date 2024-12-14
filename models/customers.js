const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    userDescription: {
        type: String
    },
});

module.exports = mongoose.model("Customer", customerSchema);