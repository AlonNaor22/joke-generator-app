const axios = require("axios");
require("dotenv").config();

const generateJokes = async (subject, count) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `Generate ${count} jokes about ${subject}. Each joke should be on a new line.`,
          },
        ],
        max_tokens: 300,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const jokes = response.data.choices[0].message.content
      .split("\n")
      .filter((joke) => joke.trim() !== "");

    return jokes;
  } catch (error) {
    console.error(
      "Error generating jokes:",
      error.response ? error.response.data : error.message
    );
    throw new Error("Failed to generate jokes");
  }
};

module.exports = { generateJokes };
