const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = Schema({
  roleId: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  rateCard: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  onOff: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    required: true,
  },
  roleDescription: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
});

const Role = mongoose.model("Role", roleSchema);
module.exports = Role;
