const express = require("express");

// Create a new router instance using Express's Router method
const router = express.Router();

// Import the Task model to interact with the database
const Tache = require("../modele/tache");

// **Add a new task (POST)**
router.post("/taches", async (req, res) => {
  try {
    // Create a new task using the data from the request body
    const tache = new Tache(req.body);

    // Save the task to the MongoDB database
    await tache.save();

    // Respond with the created task and a 201 (Created) status
    res.status(201).json(tache);
  } catch (error) {
    // If an error occurs (e.g., validation error), respond with a 400 status and the error message
    res.status(400).json({ error: error.message });
  }
});

// **Get all tasks (GET)**
router.get("/taches", async (req, res) => {
  try {
    // Fetch all tasks from the MongoDB database
    const taches = await Tache.find();

    // Respond with the fetched tasks
    res.json(taches);
  } catch (error) {
    // If an error occurs, respond with a 500 status and the error message
    res.status(500).json({ error: error.message });
  }
});

// **Update a task (PUT)**
router.put("/taches/:id", async (req, res) => {
  try {
    // Find the task by ID and update it with the new data
    const tache = await Tache.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // If the task was not found, return a 404 status with an error message
    if (!tache) return res.status(404).json({ error: "Tâche introuvable" });

    // Respond with the updated task
    res.json(tache);
  } catch (error) {
    // If an error occurs, respond with a 400 status and the error message
    res.status(400).json({ error: error.message });
  }
});

// **Delete a task (DELETE)**
router.delete("/taches/:id", async (req, res) => {
  try {
    // Find and delete the task by its ID
    const tache = await Tache.findByIdAndDelete(req.params.id);

    // If no task was found, return a 404 status with an error message
    if (!tache) return res.status(404).json({ error: "Tâche introuvable" });

    // Respond with a success message indicating that the task was deleted
    res.json({ message: "Tâche supprimée" });
  } catch (error) {
    // If an error occurs, respond with a 500 status and the error message
    res.status(500).json({ error: error.message });
  }
});

// Export the router for use in the main app
module.exports = router;
