// Import fs module
const fs = require("fs");


// Start Callback (ES5)
fs.readFile("./contents/content1.txt", "utf-8", (err, content1) {
    if (err) throw err;
    fs.readFile("./contents/content2.txt", "utf-8", (err, content2) => {
        if (err) throw err;
        console.log(content2);
    }); 
});

readline.question("Hello: ", (hello) => {
    console.log(hello);
    readline.question("Hello2: ", (hello2) => {
        console.log(hello2);
    });
});

