// allocation.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  employeeId: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  roleId: {
    type: Schema.Types.ObjectId,
    ref: 'Role',
    required: true,
  },
 
});

module.exports = mongoose.model('Listing', listingSchema);
