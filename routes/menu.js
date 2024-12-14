const express = require('express');
const routes = express.Router();
const menu = require("../controllers/menu");

routes.get("/", menu.getMenus);
routes.post("/", menu.postMenu);
routes.get("/:menuId", menu.getMenu);

module.exports = routes