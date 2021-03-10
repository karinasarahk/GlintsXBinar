// Import readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pyramid = require("./function/rectPyramid"); // import pyramid
const cylinder = require("./function/cylinder"); // import cylinder
const prism = require("./function/prism"); // import prism

/*
function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}
*/

module.exports.rl = rl; // export rl to make another can run the readline
// module.exports.isEmptyOrSpaces = isEmptyOrSpaces;
module.exports.menu = measureGeometry;

//=============================== MAIN MENU ==================================//

function measureGeometry() {
  console.log("Choose the Option Number :");
  console.log("1. Rectangular Pyramid\n2. Cylinder\n3. Prism\n4. Exit");
  rl.question(`Option: `, (opt) => {
    if (opt == 1) {
      pyramid.input();
    } else if (opt == 2) {
      cylinder.input();
    } else if (opt == 3) {
      prism.input();
    } else if (opt == 4) {
      rl.close();
    } else {
      console.log(`Your Selection is Not in the OPTION\n`);
      measureGeometry();
    }
  });
}
// call the Main Menu
measureGeometry();
