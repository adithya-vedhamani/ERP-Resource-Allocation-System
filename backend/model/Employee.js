const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeId: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
    required: true,
  },
  band: {
    type: String,
    required: true,
  },
  subdBand: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  rm: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  dateOfJoining: {
    type: Date,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  rex: {
    type: Number,
    required: true,
  },
  tex: {
    type: Number,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Employee', employeeSchema);
