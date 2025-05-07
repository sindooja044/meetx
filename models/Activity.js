// models/Activity.js
const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  // Add other fields as needed
});

const Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;
