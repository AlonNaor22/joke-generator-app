// Import required libraries
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
// Import the routes for joke generation
const jokeRoutes = require("./routes/jokeRoutes");

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();
// Set the port from environment variable or use default 3000
const PORT = process.env.PORT || 3000;

// Middleware setup
// Parse JSON request bodies
app.use(bodyParser.json());
// Parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
// This allows serving the HTML, CSS, and client-side JavaScript
app.use(express.static("public"));

// Register the joke generation routes
// All routes will be prefixed with '/api'
app.use("/api", jokeRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  // Log a message when the server starts successfully
  console.log(`Server running on port ${PORT}`);
});
