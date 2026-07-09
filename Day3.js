// feat: day 3 express server with home and about routes 

const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Welcome to my express server");
});

app.get("/about", (req, res) => {
    res.status(200).send("This is my about page");
});

app.listen(3000);


// git commit -m "feat: day 3 - initialize express server with add home ("/") and about ("about/") routes"