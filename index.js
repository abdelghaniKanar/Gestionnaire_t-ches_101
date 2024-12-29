// Import neccecery modules

// Import the Express library to set up the server and handle HTTP requests
const express = require("express");
// Import connexionDB function
const connectDB = require("./config/connexionDb");

// Call the function to connect to MongoDB
connectDB();

// Create an instance of an Express application to configure and manage the server
const app = express();

// Define the port on which the server will listen for incoming requests
const port = 3000;

// Middleware (Functions that handle the processing of requests before they hit the API endpoints or after the response is sent) to parse JSON in the body of incoming requests
// By default, Node.js and Express don't know how to handle incoming data in the body of a request
// Body-parser or express.json() makes this data accessible via req.body
// More explanation: Without middleware like Body Parser, the server would receive this data as a raw string, and we would need to manually convert it to a JavaScript object to work with it.
// However, when we use Body Parser, it automatically parses this JSON data into a JavaScript object, making it accessible via req.body.
app.use(express.json());

// Start the server and make it listen on the defined port
// The callback logs a message to confirm the server is running and accessible
app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
