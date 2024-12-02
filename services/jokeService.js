// Import required libraries
const axios = require("axios");
// Load environment variables from .env file
require("dotenv").config();

// JokeService class to handle joke generation logic
class JokeService {
  // Static async method to generate jokes
  // Takes subject and count as parameters
  static async generateJokes(subject, count) {
    try {
      // Make a POST request to OpenAI's Chat Completions API
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          // Specify the AI model to use
          model: "gpt-3.5-turbo",
          // Define the conversation messages
          messages: [
            {
              // User role message to generate jokes
              role: "user",
              // Prompt for generating specific number of jokes about a subject
              content: `Generate ${count} jokes about ${subject}. Each joke should be on a new line.`,
            },
          ],
          // Limit the maximum number of tokens (words) in the response
          max_tokens: 300,
        },
        {
          // Set up headers for API authentication and content type
          headers: {
            // Bearer token authentication using API key from .env
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Process the API response
      // Split the response into individual jokes
      const jokes = response.data.choices[0].message.content
        .split("\n") // Split by new line
        .filter((joke) => joke.trim() !== ""); // Remove empty lines

      return jokes;
    } catch (error) {
      // Log and handle any errors during joke generation
      console.error(
        "Error generating jokes:",
        error.response ? error.response.data : error.message
      );
      // Throw a user-friendly error
      throw new Error("Failed to generate jokes");
    }
  }
}

// Export the JokeService class for use in other files
module.exports = JokeService;
