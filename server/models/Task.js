const mongoose = require('mongoose');

// Define the blueprint (Schema)
const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true, // The 'text' field is mandatory
  },
  completed: {
    type: Boolean,
    default: false, // If not provided, it defaults to false
  },
});

// Create the Model from the Schema and export it
module.exports = mongoose.model('Task', taskSchema);