const express = require('express');
const routes = express.Router();
const ingredientType = require("../controllers/ingredientType");

routes.get("/", ingredientType.getIngredientTypes);
routes.post("/", ingredientType.postIngredientType);
routes.get("/:ingredientTypeId", ingredientType.getIngredientType);

module.exports = routes