const express = require("express");
const rerouter = express.Router();
const resourcesController = require("../controllers/resources-controller");

rerouter.get("/", resourcesController.getAllResources);
rerouter.post("/", resourcesController.addResource);
rerouter.get("/:id", resourcesController.getResourceById);
rerouter.put("/:id", resourcesController.updateResource);
rerouter.delete("/:id", resourcesController.deleteResource);

module.exports = rerouter;
