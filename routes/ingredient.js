const express = require('express');
const routes = express.Router();
const ingredient = require("../controllers/ingredient");

routes.get("/", ingredient.getIngredients);
routes.post("/", ingredient.postIngredient);
routes.get("/:ingredientId", ingredient.getIngredient);

module.exports = routes