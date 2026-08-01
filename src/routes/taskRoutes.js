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

// Protected Routes
router.get("/tasks", protect, getAllTasks);
router.get("/tasks/:id", protect, getTaskById);
router.post("/tasks", protect, createTask);
router.put("/tasks/:id", protect, updateTask);
router.delete("/tasks/:id", protect, deleteTask);

module.exports = router;