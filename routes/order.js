const express = require('express');
const routes = express.Router();
const order = require("../controllers/order");

routes.get("/", order.getOrders);
routes.post("/", order.postOrder);
routes.get("/:orderId", order.getOrder);

module.exports = routes