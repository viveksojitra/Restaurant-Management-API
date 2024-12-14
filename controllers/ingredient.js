const ingredient = require("../models/ingredient");

const getIngredient = async (req, res) => {
    try {
        const ingredient = await ingredient.findById(req.params.id).populate('ingredientType');

        console.log(ingredient);
        res.status(200).json(ingredient);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getIngredients = async (req, res) => {
    try {
        const ingredients = await ingredient.find();
        res.status(200).json(ingredients);
    } catch (error) {
        res.status(500).json(error);
    }
};

const postIngredient = async (req, res) => {
    try {
        const { name } = req.body;

        const newIngredient = await new ingredient({
            name,
        });

        await newIngredient.save();

        res.status(200).json(newIngredient);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    getIngredients,
    postIngredient,
    getIngredient
}