const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

// Protected Route
router.get("/tasks", protect, getAllTasks);

// Other Routes
router.get("/tasks/:id", getTaskById);
router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;