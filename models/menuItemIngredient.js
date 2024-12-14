const mongoose = require("mongoose");

const menuItemIngredientSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },

    // menu item
    menuItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MenuItem",
        required: true,
    },

    // ingredient
    ingredient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ingredient",
        required: true,
    }
});

module.exports = mongoose.model("MenuItemIngredient", menuItemIngredientSchema);