const express = require('express');
const routes = express.Router();
const table = require("../controllers/table");

routes.get("/", table.getTables);
routes.post("/", table.postTable);
routes.get("/:tableId", table.getTable);

module.exports = routes