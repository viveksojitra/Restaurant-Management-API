const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    menuDate: {
        // change to Date after testing
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Menu", menuSchema);