// feat: day 4 - global logging middleware

const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.status(200).send("Welcome to my express server");
});

app.get("/about", (req, res) => {
    res.status(200).send("This is my about page");
});

app.listen(3000);

// git commit -m "feat: day 4 - add global logging middleware to log all incoming requests"