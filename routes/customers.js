const express = require('express');
const routes = express.Router();
const customers = require("../controllers/customers");

routes.get("/", customers.getCustomers);
routes.post("/", customers.postCustomer);
routes.get("/:customerId", customers.getCustomer);

module.exports = routes