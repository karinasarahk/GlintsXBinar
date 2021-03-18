// Import fs 
const fs = require("fs");

// make promise object (abaikan, aja ini code dummy)
const readFile = (file, options) =>
    new Promise((success, failed) => {
        fs.readFile(file, options, (err, content) => {
            if (err) failed(err);
                return success(content);
        });
    });

    // nah perhatiin yang ini:
    const readAllFiles = async () => {
        try {
            let data = await Promise.all([
             readFile("./contents/content1.txt", "utf-8"),
             readFile("./contents/content2.txt", "utf-8")   
            ]);
            
            /*
            let content1 = await readFile("./contents/content1.txt", "utf-8");
            console.log(content1);

            let content2 = await readFile("./contents/content2.txt", "utf-8");
            console.log(content2);

            let content3 = content1 + content2;
            console.log(content3);
            */

            // let content1 = await readFile("./contents/content1.txt", "utf-8");
            // let content2 = await readFile("./contents/content2.txt", "utf-8");

            console.log(data[0] + " " + data[1]);
        } catch (e) {
            console.log("Eh! Salah :(");
        }
    }

    readAllFiles();