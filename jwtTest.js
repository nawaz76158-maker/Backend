require("dotenv").config();
const jwt = require("jsonwebtoken");

const payload = { 
    userId: "173",
};

const token =jwt.sign(payload, process.env.JWT_SECRET);

console.log("Generated Token:");
console.log(token);

const decoded = jwt.verify(token, process.env.JWT_SECRET);

console.log("\nDecoded Payload:");
console.log(decoded);