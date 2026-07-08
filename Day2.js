// feat: day 2 - first node server with http module

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hello this is my first server");
})

server.listen(3000);