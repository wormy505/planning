const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Create a new user
router.post("/", (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  newUser.save((err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to create user" });
    } else {
      res.status(201).json(user);
    }
  });
});

// Check if a user exists
router.get("/:username", (req, res) => {
  const username = req.params.username;
  User.findOne({ username }, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to find user" });
    } else if (user) {
      res.status(200).json({ exists: true });
    } else {
      res.status(404).json({ exists: false });
    }
  });
});

module.exports = router;
