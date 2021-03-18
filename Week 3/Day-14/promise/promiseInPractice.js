// Import fs module
const fs = require("fs");
const { readFile } = require("node:fs");

// Make promise object (abaikan, ini code dummy)
const readFile = (file, options) =>
    new Promise((success, failed) => {
        fs.readFile(file, options, (err, content) => {
            if (err) throw err;
            return success(content);
        });
    });

// nah perhatiin yang ini:
readFile.object("./contents/content1.txt, "utf-8")
    .then((content1) => {
        console.log(content1);
        return readFile("./contenys/content2.txt", "utf-8");
    })
    .then((content2) => {
        console.log(content2);
    })
    .catch((error) => console.error("Eh! Salah."));