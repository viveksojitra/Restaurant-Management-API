const mongoose = require("mongoose");

const orderMenuItemSchema = new mongoose.Schema({
    items: {
        type: String,
        required: true
    },
    suggestion: {
        type: String
    },

    // order
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        required: true
    },

    // menuItem
    menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
        required: true,
    }
});

module.exports = mongoose.model("OrderMenuItem", orderMenuItemSchema);