const express = require("express");
const router = express.Router();

const { getAllTasks, getTaskById, createTask } = require("../controllers/taskController");  

router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getTaskById);
router.post("/tasks", createTask);

module.exports = router;