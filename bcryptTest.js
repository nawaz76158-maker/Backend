const bcrypt = require("bcrypt");

async function test() {
const plainPassword = "mySecret173";
const saltRounds = 10;

const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

console.log("Hashed password:", hashedPassword);

const isMatch = await bcrypt.compare(
    plainPassword,
    hashedPassword
);

console.log("Correct Password:", isMatch);

const wrongPassword = "wrongPassword";

const isWrong = await bcrypt.compare(
    wrongPassword,
    hashedPassword
);

console.log("Wrong Password:", isWrong);

const secondHash = await bcrypt.hash(
    plainPassword,
    saltRounds
);

console.log("First Hash :", hashedPassword);
console.log("Second Hash:", secondHash);

}

test();