const menuItemIngredient = require("../models/menuItemIngredient");

const getMenuItemIngredient = async (req, res) => {
    const menuItemIngredientId = req.params.menuItemIngredientId;
    try {
        const menuItemIngredient = await menuItemIngredient.findById(menuItemIngredientId).populate('ingredients').populate('menuItem');

        console.log(menuItemIngredient);
        res.status(200).json(menuItemIngredient);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getMenuItemIngredients = async (req, res) => {
    try {
        const menuItemIngredients = await menuItemIngredient.find();
        res.status(200).json(menuItemIngredients);
    } catch (error) {
        res.status(400).json(error);
    }
}

const postMenuItemIngredient = async (req, res) => {
    try {
        const { description } = req.body;
        // const { menuItemId } = req.params;
        const newMenuItemIngredient = await new menuItemIngredient({
            description,
            // menuItemId
        });
        await newMenuItemIngredient.save();
        res.status(200).json(newMenuItemIngredient);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    getMenuItemIngredient,
    getMenuItemIngredients,
    postMenuItemIngredient
}