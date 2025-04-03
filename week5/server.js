const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes");
const logger = require("./middleware/logger");

// Initialize app first
const app = express();
const PORT = 3000;

// Middleware
app.use(logger);  // This should come after initializing app
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
