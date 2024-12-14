const express = require('express');
const routes = express.Router();
const menuItemIngredient = require("../controllers/menuItemIngredient");

routes.get("/", menuItemIngredient.getMenuItemIngredients);
routes.post("/", menuItemIngredient.postMenuItemIngredient);
routes.get("/:menuItemIngredientId", menuItemIngredient.getMenuItemIngredient);

module.exports = routes