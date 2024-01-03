const Project = require("../model/Project");

const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();
    if (!projects || projects.length === 0) {
      return res.status(404).json({ message: "No projects found" });
    }
    return res.status(200).json({ projects });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getProjectById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({ message: "No project found" });
    }
    return res.status(200).json({ project });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addProject = async (req, res, next) => {
  const {
    projectId,
    projectName,
    projectManager,
    projectType,
    projectStartDate,
    projectEndDate,
    value,
    currency,
    customerId,
    domain,
    location,
    group,
    accountManager,
    projectCategory,
    projectDescription,
  } = req.body;
  try {
    const project = new Project({
      projectId,
      projectName,
      projectManager,
      projectType,
      projectStartDate,
      projectEndDate,
      value,
      currency,
      customerId,
      domain,
      location,
      group,
      accountManager,
      projectCategory,
      projectDescription,
    });
    await project.save();
    return res.status(201).json({ project });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to add project" });
  }
};

const updateProject = async (req, res, next) => {
  const id = req.params.id;
  const {
    projectId,
    projectName,
    projectManager,
    projectType,
    projectStartDate,
    projectEndDate,
    value,
    currency,
    customerId,
    domain,
    location,
    group,
    accountManager,
    projectCategory,
    projectDescription,
  } = req.body;
  try {
    let project = await Project.findByIdAndUpdate(id, {
      projectId,
      projectName,
      projectManager,
      projectType,
      projectStartDate,
      projectEndDate,
      value,
      currency,
      customerId,
      domain,
      location,
      group,
      accountManager,
      projectCategory,
      projectDescription,
    });
    if (!project) {
      return res.status(404).json({ message: "Unable to update. Project not found" });
    }
    project = await project.save();
    return res.status(200).json({ project });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteProject = async (req, res, next) => {
  const id = req.params.id;
  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({ message: "Unable to delete. Project not found" });
    }
    return res.status(200).json({ message: "Project successfully deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllProjects,
  addProject,
  getProjectById,
  updateProject,
  deleteProject,
};
