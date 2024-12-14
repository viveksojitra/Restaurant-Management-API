const express = require('express');
const routes = express.Router();
const menuItem = require("../controllers/menuItem");

routes.get("/", menuItem.getMenuItems);
routes.post("/", menuItem.postMenuItem);
routes.get("/:menuItemId", menuItem.getMenuItem);

module.exports = routes