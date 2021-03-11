// Importing Module
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function greet(name, address, birthday) {
    let Name = name;
    let City = address;
    let Age = currentYear - birthday;
    return console.log("Hello, " + Name + "! Looks like you're " + Age + " years old, and you live in " +  City + "!");
}

// DON'T CHANGE
console.log("Goverment Registry\n");
// GET User's Name
rl.question("What is your name? ", (name) => {
  // GET User's Address
  rl.question("Which city do you live in? ", (address) => {
    // GET User's Birthday
    rl.question("When is your birthyear? ", (birthday) => {
      greet(name, address, birthday);

      rl.close();
    });
  });
});

rl.on("close", () => {
    process.exit();
  });