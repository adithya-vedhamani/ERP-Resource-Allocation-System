const Resource = require("../model/Resource");

const getAllResources = async (req, res, next) => {
  try {
    const resources = await Resource.find();
    if (!resources || resources.length === 0) {
      return res.status(404).json({ message: "No resources found" });
    }
    return res.status(200).json({ resources });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getResourceById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const resource = await Resource.findById(id);
    if (!resource) {
      return res.status(404).json({ message: "No resource found" });
    }
    return res.status(200).json({ resource });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addResource = async (req, res, next) => {
  const {
    resourceId,
    projectId,
    employeeId,
    assignmentStartDate,
    assignmentEndDate,
    role,
    billingStatus,
    allocationPercentage,
  } = req.body;
  try {
    const newResource = new Resource({
      resourceId,
      projectId,
      employeeId,
      assignmentStartDate,
      assignmentEndDate,
      role,
      billingStatus,
      allocationPercentage,
    });
    await newResource.save();
    return res.status(201).json({ resource: newResource });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to add resource" });
  }
};

const updateResource = async (req, res, next) => {
  const id = req.params.id;
  const {
    resourceId,
    projectId,
    employeeId,
    assignmentStartDate,
    assignmentEndDate,
    role,
    billingStatus,
    allocationPercentage,
  } = req.body;
  try {
    let existingResource = await Resource.findByIdAndUpdate(id, {
      resourceId,
      projectId,
      employeeId,
      assignmentStartDate,
      assignmentEndDate,
      role,
      billingStatus,
      allocationPercentage,
    });
    if (!existingResource) {
      return res.status(404).json({ message: "Unable to update. Resource not found" });
    }
    existingResource = await existingResource.save();
    return res.status(200).json({ resource: existingResource });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteResource = async (req, res, next) => {
  const id = req.params.id;
  try {
    const resource = await Resource.findByIdAndDelete(id);
    if (!resource) {
      return res.status(404).json({ message: "Unable to delete. Resource not found" });
    }
    return res.status(200).json({ message: "Resource successfully deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllResources,
  addResource,
  getResourceById,
  updateResource,
  deleteResource,
};
