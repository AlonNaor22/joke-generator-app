const express = require("express");

const { generateJokes } = require("../services/jokeService");

const router = express.Router();

router.post("/generate-jokes", async (req, res) => {
  try {
    const { subject, count } = req.body;

    if (!subject || !count || count <= 0) {
      return res.status(400).json({ error: "Invalid subject or count" });
    }

    const jokes = await generateJokes(subject, count);

    res.json({ jokes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate jokes" });
  }
});

module.exports = router;
