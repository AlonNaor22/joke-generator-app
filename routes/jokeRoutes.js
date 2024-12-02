// Import required libraries
const express = require("express");
// Import the JokeService for generating jokes
const JokeService = require("../services/jokeService");

// Create an Express router to handle API routes
const router = express.Router();

// Define a POST route for joke generation
router.post("/generate-jokes", async (req, res) => {
  try {
    // Destructure subject and count from the request body
    const { subject, count } = req.body;

    // Validate input parameters
    if (!subject || !count || count <= 0) {
      // Return a 400 Bad Request error if inputs are invalid
      return res.status(400).json({ error: "Invalid subject or count" });
    }

    // Generate jokes using the JokeService
    const jokes = await JokeService.generateJokes(subject, count);

    // Send the generated jokes as a JSON response
    res.json({ jokes });
  } catch (error) {
    // Log any errors that occur during joke generation
    console.error(error);
    // Send a 500 Internal Server Error response
    res.status(500).json({ error: "Failed to generate jokes" });
  }
});

// Export the router to be used in the main server file
module.exports = router;
