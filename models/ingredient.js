const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    // ingredient type
    ingredientType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "IngredientType",
        required: true
    }
});

module.exports = mongoose.model("Ingredient", ingredientSchema);