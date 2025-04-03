const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

// Middleware for logging requests
app.use(morgan("dev"));

// Middleware for parsing JSON request bodies
app.use(express.json());

// Middleware for handling CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to My Node.js Server with Middleware!");
});

// Sample Users Data
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// GET Users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST Create User
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT Update User
app.put("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  user.name = req.body.name || user.name;
  res.json(user);
});

// DELETE User
app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === userId);
  if (index === -1) {
    return res.status(404).json({ error: "User not found" });
  }
  users.splice(index, 1);
  res.json({ message: "User deleted successfully" });
});

// 404 Middleware - Handles unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: `Cannot ${req.method} ${req.originalUrl}` });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
