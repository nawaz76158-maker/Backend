const express = require("express");
require("dotenv").config();

const app = express();
const logger = require("./src/middleware/logger");
// 1. Import your task routes (remember, no need to add .js)
const taskRoutes = require("./src/routes/taskRoutes");

// Middleware
app.use(express.json());
app.use(logger); // <--- This activates your logger!

// 2. Mount the task routes at the root "/" so they don't double up
app.use("/", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});