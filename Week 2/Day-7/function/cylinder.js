const index = require("../index");

// Function to calculate cylinder volume
function calculateCylinder(radius, height) {
  return Math.PI * height * Math.pow(radius, 2);
}

// Function to input the measurements
function input() {
  index.rl.question("Input Radius (m): ", (r) => {
    if (r > 0) {
      index.rl.question("Input Height (m):",(h)=>{
        if (h > 0) {
          console.log(`\nCylinder's volume is ${calculateCylinder(r,h)} m3 \n`);
          index.menu();
        } else {
          console.log(`Height must be number`);
          input();
        }
      })
    } else {
      console.log(`Radius must be number`);
      input();
    }
  });
}

module.exports = { input };
