const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resourceSchema = Schema({
  resourceId: {
    type: String,
    required: true,
    unique: true,
  },
  projectId: {
    type: String,
    required: true,
  },
  employeeId: {
    type: String,
    required: true,
  },
  assignmentStartDate: {
    type: Date,
    required: true,
  },
  assignmentEndDate: {
    type: Date,
  },
  role: {
    type: String,
    required: true,
  },
  billingStatus: {
    type: String,
    required: true,
  },
  allocationPercentage: {
    type: Number,
    required: true,
  },
});

const Resource = mongoose.model('Resource', resourceSchema);

module.exports = Resource;
