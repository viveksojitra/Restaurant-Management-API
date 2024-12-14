const mongoose = require("mongoose");

const ingredientTypeSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model("ingredientType", ingredientTypeSchema);