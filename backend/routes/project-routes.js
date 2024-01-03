const express = require("express");
const router = express.Router();
const Project = require("../model/Project");
const projectsController = require("../controllers/projects-controller");

router.get("/", projectsController.getAllProjects);
router.post("/", projectsController.addProject);
router.get("/:id", projectsController.getProjectById);
router.put("/:id", projectsController.updateProject);
router.delete("/:id", projectsController.deleteProject);

module.exports = router;
