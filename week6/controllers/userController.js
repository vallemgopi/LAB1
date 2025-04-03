const User = require("../models/User");

// GET all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// POST create a new user
const createUser = async (req, res) => {
  try {
    const newUser = new User({ name: req.body.name });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports = { getUsers, createUser };
