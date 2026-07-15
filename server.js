const express = require("express");
require("dotenv").config();

const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Connect to MongoDB
const connectDB = require("./src/config/db");   
connectDB();                                     

const app = express();
const logger = require("./src/middleware/logger");
const taskRoutes = require("./src/routes/taskRoutes");

// Middleware
app.use(express.json());
app.use(logger);

app.use("/", taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});