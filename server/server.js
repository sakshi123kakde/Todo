const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Import routes
const taskRoutes = require("./routes/taskRoutes");

// Initialize the app
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import Database Connection
require("./config/db");

// Routes
app.use("/api/tasks", taskRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
