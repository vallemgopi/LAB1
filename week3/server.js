const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to My Node.js Server!");
});

// GET Request - Fetch data
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  res.json(users);
});

// POST Request - Create new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = Date.now();
  res.status(201).json(newUser);
});

// PUT Request - Update user
app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ${userId} updated successfully!` });
});

// DELETE Request - Delete user
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User ${userId} deleted successfully!` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
