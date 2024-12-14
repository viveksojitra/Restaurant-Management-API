const express = require('express');
const routes = express.Router();
const staffRole = require("../controllers/staffRole");

routes.get("/", staffRole.getStaffRoles);
routes.post("/", staffRole.postStaffRole);
routes.get("/:staffRoleId", staffRole.getStaffRole);

module.exports = routes