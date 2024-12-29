// Import mongoose to interact with MongoDB
const mongoose = require("mongoose");

// Why use a schema?
// A schema is used to define the structure and data types of the documents we will store in MongoDB.
// It acts like a blueprint or model for the Task document (like a template with specific fields and types).

const tacheSchema = new mongoose.Schema({
  // Define the title field for the Task
  titre: {
    type: String, // The title will be a string
    required: true, // This field is mandatory, cannot be left empty
  },

  // Define the description field for the Task
  description: {
    type: String, // The description will also be a string
    required: true, // This field is mandatory as well
  },

  // Define the completed field for the Task
  termine: {
    type: Boolean, // The completed field will be a Boolean (true or false)
    default: false, // If not provided, it will default to false, meaning the task is incomplete
  },
});

// Export the model so it can be used elsewhere in the app
module.exports = mongoose.model("Tache", tacheSchema);
