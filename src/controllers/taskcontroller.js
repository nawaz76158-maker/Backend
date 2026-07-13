// Fake Tasks Data
let tasks = [
    { id: 1, title: "Buy groceries" },
    { id: 2, title: "Buy Books" },
    { id: 3, title: "Print all the documents" }
];

// Helper to find a task by ID
const findTaskIndex = (id) => tasks.findIndex(task => task.id === Number(id));

// GET /tasks
const getAllTasks = (req, res) => {
    res.status(200).json(tasks);
};

// GET /tasks/:id
const getTaskById = (req, res) => {
    const index = findTaskIndex(req.params.id);
    
    if (index === -1) {
        return res.status(404).json({ message: "Task not found" });
    }
    
    res.status(200).json(tasks[index]);
};

// POST /tasks
const createTask = (req, res) => {
    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: "Title is required" });
    }

    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;
    const newTask = { id: newId, title };
    
    tasks.push(newTask);
    res.status(201).json({ message: "Task created successfully", data: newTask });
};

// PUT /tasks/:id
const updateTask = (req, res) => {
    const index = findTaskIndex(req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    const { title } = req.body;
    if (!title) {
        return res.status(400).json({ message: "Title is required for update" });
    }

    tasks[index].title = title;
    res.status(200).json({ message: "Task updated successfully", data: tasks[index] });
};

// DELETE /tasks/:id
const deleteTask = (req, res) => {
    const index = findTaskIndex(req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Task not found" });
    }

    tasks.splice(index, 1); // Removes the item directly from the array in-place
    res.status(200).json({ message: "Task deleted successfully" });
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask};