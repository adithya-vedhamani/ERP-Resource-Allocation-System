const Role = require("../model/Role");

const getAllRoles = async (req, res, next) => {
  try {
    const roles = await Role.find();
    if (!roles || roles.length === 0) {
      return res.status(404).json({ message: "No roles found" });
    }
    return res.status(200).json({ roles });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getRoleById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const role = await Role.findById(id);
    if (!role) {
      return res.status(404).json({ message: "No role found" });
    }
    return res.status(200).json({ role });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addRole = async (req, res, next) => {
  const {
    roleId,
    role,
    rateCard,
    currency,
    experience,
    location,
    onOff,
    unit,
    roleDescription,
    skill,
  } = req.body;
  try {
    const newRole = new Role({
      roleId,
      role,
      rateCard,
      currency,
      experience,
      location,
      onOff,
      unit,
      roleDescription,
      skill,
    });
    await newRole.save();
    return res.status(201).json({ role: newRole });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Unable to add role" });
  }
};

const updateRole = async (req, res, next) => {
  const id = req.params.id;
  const {
    roleId,
    role,
    rateCard,
    currency,
    experience,
    location,
    onOff,
    unit,
    roleDescription,
    skill,
  } = req.body;
  try {
    let existingRole = await Role.findByIdAndUpdate(id, {
      roleId,
      role,
      rateCard,
      currency,
      experience,
      location,
      onOff,
      unit,
      roleDescription,
      skill,
    });
    if (!existingRole) {
      return res.status(404).json({ message: "Unable to update. Role not found" });
    }
    existingRole = await existingRole.save();
    return res.status(200).json({ role: existingRole });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteRole = async (req, res, next) => {
  const id = req.params.id;
  try {
    const role = await Role.findByIdAndDelete(id);
    if (!role) {
      return res.status(404).json({ message: "Unable to delete. Role not found" });
    }
    return res.status(200).json({ message: "Role successfully deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  getAllRoles,
  addRole,
  getRoleById,
  updateRole,
  deleteRole,
};
