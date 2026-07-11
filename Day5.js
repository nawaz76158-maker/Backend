// feat : day 5 - create a simple REST API with express
const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Fake Tasks Data
const tasks = [
    { id: 1, title: "Buy groceries" },
    { id: 2, title: "Buy Books" },
    { id: 3, title: "Print all the documents" }
];

// GET /tasks
app.get("/tasks", (req, res) => {
    res.status(200).json(tasks);
});

// GET /tasks/:id
app.get("/tasks/:id", (req, res) => {

    const id = Number(req.params.id);

    const result = tasks.find(task => task.id === id);

    if (result) {
        res.status(200).json(result);
    } else {
        res.status(404).json({
            message: "Task not found"
        });
    }

});

// POST /tasks
app.post("/tasks", (req, res) => {
    res.status(201).json({
        message: "Task received"
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// git commit -m "feat: day 5 - Rest API design with tasks resources"