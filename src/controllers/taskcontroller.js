
const Task = require("../models/Task");


// GET /tasks
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({user: req.user.userId}); // Fetch tasks for the authenticated user
         res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error fetching tasks" });
    }
};

// GET /tasks/:id
const getTaskById = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user.userId }); // Fetch task by ID for the authenticated user
        
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
        const { title, description, priority, dueDate } = req.body;
        if (!title) {
            return res.status(400).json({ message: "Title is required" });
        }
   
        // validation here
        const allowedPriorities = ["low", "medium", "high"];

     if (priority && !allowedPriorities.includes(priority.toLowerCase())) {
       return res.status(400).json({
        message: "Priority must be low, medium, or high."
       });
      }
        
        const newTask = await Task.create({ title, description, priority, dueDate, user: req.user.userId });

        res.status(201).json({ message: "Task created successfully", data: newTask });
          } catch (error) {
        res.status(500).json({ message: "Error creating task" });
          }   
};


// PUT /tasks/:id
const updateTask = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user.userId }); // Fetch task by ID for the authenticated user

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        const { title, description, priority, dueDate, completed } = req.body;

        const allowedPriorities = ["low", "medium", "high"];

        // Validation here
      if (
        priority &&
       !allowedPriorities.includes(priority.toLowerCase())
      ) {
         return res.status(400).json({
          message: "Priority must be low, medium, or high."
        });
     }

        if (title !== undefined) task.title = title;
        if (description !== undefined) task.description = description;
        if (priority !== undefined) task.priority = priority;
        if (dueDate !== undefined) task.dueDate = dueDate;
        if (completed !== undefined) task.completed = completed;

        await task.save();

        res.status(200).json({
            message: "Task updated successfully",
            data: task
        });

    } catch (error) {
        res.status(500).json({
            message: "Error updating task"
        });
    }
};

// DELETE /tasks/:id
const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.userId }); // Fetch task by ID for the authenticated user

        if (!deletedTask) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting task" });
    }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask};