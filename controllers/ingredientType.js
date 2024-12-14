const ingredientType = require("../models/ingredientType");

const getIngredientType = async (req, res) => {
    try {
        const ingredientType = await ingredientType.findById(req.params.id);
        res.status(200).json(ingredientType);
    } catch (error) {
        res.status(500).json(error);
    }
};

const getIngredientTypes = async (req, res) => {
    try {
        const ingredientTypes = await ingredientType.find();
        res.status(200).json(ingredientTypes);
    } catch (error) {
        res.status(500).json(error);
    }
};

const postIngredientType = async (req, res) => {
    try {
        const { category, description } = req.body;

        const newIngredientType = await new ingredientType({
            category,
            description,
        });

        await newIngredientType.save();

        res.status(200).json(newIngredientType);
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = {
    getIngredientTypes,
    postIngredientType,
    getIngredientType
}