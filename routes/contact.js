const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// POST - Receive contact form data
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: "Message received successfully!" });
  } catch (error) {
    console.error("❌ Error saving message:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
