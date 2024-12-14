const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
    tableNumber: {
        type: Number,
        required: true
    },
    tableDescription: {
        type: String
    },
});

module.exports = mongoose.model("Table", tableSchema);