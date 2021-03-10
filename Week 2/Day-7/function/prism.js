const index = require("../index"); // Import index to run rl on this file

// Function to calculate prism volume
function calculatePrism(h, s, l) {
  return (h * s / 2) * l;
}

// Function to input the measurements
function input() {
  index.rl.question("Input Base Triangle Height (m): ", (h) => {
    if (h > 0) {
      index.rl.question("Input Base Triangle Side (m): ", (s) => {
        if (s > 0) {
          index.rl.question("Input Prism Length (m):", (l) => {
            if (l > 0) {
              console.log(`\nPrism's volume is ${calculatePrism(h, s, l)} m3\n`);
              index.menu();
            } else {
                console.log(`Length must be number`);
                input();
              }
          });
        } else {
            console.log(`Side must be number`);
            input();
          }
      });
    } else {
        console.log(`Height must be number`);
        input();
      }
  });
}

module.exports = { input }; // Export the input, so another file can run this code
