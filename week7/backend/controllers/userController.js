const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// GET all users
const getUsers = async (req, res) => {
  const [users] = await db.query("SELECT id, name, email FROM users");
  res.json(users);
};

// POST Create a new user (Signup)
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  await db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);
  res.status(201).json({ message: "User created successfully" });
};

// POST Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const [[user]] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token });
};

module.exports = { getUsers, createUser, loginUser };
