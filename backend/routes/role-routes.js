const express = require("express");
const rrouter = express.Router();
const Role = require("../model/Role");
const rolesController = require("../controllers/roles-controller");

rrouter.get("/", rolesController.getAllRoles);
rrouter.post("/", rolesController.addRole);
rrouter.get("/:id", rolesController.getRoleById);
rrouter.put("/:id", rolesController.updateRole);
rrouter.delete("/:id", rolesController.deleteRole);

module.exports = rrouter;
