const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  projectId: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  projectManager: {
    type: String,
    required: true,
  },
  projectType: {
    type: String,
    required: true,
  },
  projectStartDate: {
    type: Date,
    required: true,
  },
  projectEndDate: {
    type: Date,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  customerId: {
    type: String,
    required: true,
  },
  domain: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  accountManager: {
    type: String,
    required: true,
  },
  projectCategory: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Project', projectSchema);
