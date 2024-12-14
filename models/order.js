const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    orderDateTime: {
        // Change to Date after testing
        type: String,
        // default: Date.now,
        required: true
    },

    // staff
    staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff",
        required: true,
    },

    // table
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Table",
        required: true,
    },
});

module.exports = mongoose.model("Order", orderSchema);