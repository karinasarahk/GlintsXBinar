const index = require("../index"); // Import index to run rl on this file

// Function to calculate pyramid volume
function calculateRectangularPyramid(length,height) {
  return Math.pow(length, 2) * height / 3;
}

// Function to input the measurements
function input() {
  index.rl.question("Input Length (m): ", (l) => {
    if (l > 0) {
      index.rl.question("Input Height (m):",(h)=>{
        if (h > 0) {
          console.log(`\nPyramid's volume is ${calculateRectangularPyramid(l,h)} m3\n`);
          index.menu();
        } else {
          console.log(`Height must be number`);
          input();
        }
      })
    } else {
      console.log(`Length must be number`);
      input();
    }
  });
}

module.exports = { input }; // Export the input, so the another file can run this code
