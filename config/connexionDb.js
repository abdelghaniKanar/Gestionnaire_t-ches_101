// Import the mongoose library to interact with MongoDB
// Mongoose provides a simple way to interact with MongoDB, including schema-based validation, easy CRUD operations
const mongoose = require("mongoose");

// Define a separate function for connecting to the MongoDB database
// This approach centralizes the database configuration and allows us to handle errors consistently.
const connexionDB = async () => {
  console.log("Tentative de connexion à MongoDB...");
  try {
    // Use mongoose.connect to establish a connection to MongoDB
    // - 'mongodb://localhost:27017/taskManager': The connection string specifying:
    //   - Protocol: mongodb://
    //   - Host: localhost (our local machine running MongoDB)
    //   - Port: 27017 (default port for MongoDB)
    //   - Database name: Gestionnaire_t-ches_101 (will be created automatically if it doesn't exist)
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/Gestionnaire_t-ches_101"

      /* The options useNewUrlParser: true and useUnifiedTopology: true are included to avoid deprecation warnings with older versions of Mongoose (pre-6.0),
      {
        // Options to deal with MongoDB's deprecation warnings for older methods:
        // - useNewUrlParser: Ensures the connection string is parsed correctly.
        useNewUrlParser: true,
        // - useUnifiedTopology: Uses the new server discovery and monitoring engine.
        useUnifiedTopology: true,
      }*/
    );
    // MongoDB might have been trying to connect over IPv6 (::1) by default,
    // but if there were issues with IPv6 (like MongoDB not listening on that address), the connection failed.
    // By specifying the IPv4 address (127.0.0.1),
    // we ensure MongoDB uses IPv4 for the connection, which is typically more stable and widely supported.

    // Log a success message when the connection is established.
    console.log("MongoDB Connecté");
  } catch (error) {
    // Catch and handle any errors that occur during the connection process.
    console.error("Erreur de connexion à MongoDB :", error.message);
    // Exit the process if the connection fails.
    // process.exit(1) signals an error and stops the application.
    process.exit(1);
  }
};

// Export the connexionDB function so it can be used in other parts of the application
// This keeps the database connection logic modular and reusable
module.exports = connexionDB;
