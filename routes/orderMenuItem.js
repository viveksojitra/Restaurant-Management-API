const express = require('express');
const routes = express.Router();
const orderMenuItem = require("../controllers/orderMenuItem");

routes.get("/", orderMenuItem.getOrderMenuItems);
routes.post("/", orderMenuItem.postOrderMenuItem);
routes.get("/:orderMenuItemId", orderMenuItem.getOrderMenuItem);

module.exports = routes