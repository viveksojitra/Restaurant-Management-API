const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },

    // menu
    menu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Menu",
        required: true
    },
});

module.exports = mongoose.model("MenuItem", menuItemSchema);