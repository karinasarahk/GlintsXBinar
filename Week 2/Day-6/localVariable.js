let message = "Hello!"; // Global variable

function hello() {
    let message = "Hello, Reza!"; // this variable belongs to hello function
    console.log(message); // Priority for local variable
}

function world() {
    let message = "Hello, World!"; // This variable belongs to the hello function
    console.log(message); // priority for local variable
}

hello(); // call hello function
world(); // call world function

console.log(message);