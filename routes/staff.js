const express = require('express');
const routes = express.Router();
const staff = require("../controllers/staff");

routes.get("/", staff.getStaffs);
routes.post("/", staff.postStaff);
routes.get("/:staffId", staff.getstaff);

module.exports = routes