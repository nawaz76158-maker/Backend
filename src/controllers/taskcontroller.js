
const Task = require("../models/Task");

// GET /tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks" });
    }
};

// GET /tasks/:id
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        
        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }
        
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "Error fetching task" });
    }
};

// POST /tasks
const createTask = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }
    
        const newTask = await Task.create({ title });

        res.status(201).json({ message: "Task created successfully", data: newTask });
          } catch (error) {
        res.status(500).json({ message: "Error creating task" });
          }   
};


// PUT /tasks/:id
const updateTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        const { title } = req.body;

        if (!title) {
            return res.status(400).json({ message: "Title is required for update" });
        }

        task.title = title;
        await task.save();

        res.status(200).json({
            message: "Task updated successfully",
            data: task
        });

    } catch (error) {
        res.status(500).json({ message: "Error updating task" });
    }
};

// DELETE /tasks/:id
const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting task" });
    }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask};