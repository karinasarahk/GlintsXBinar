// Import fs 
const fs = require("fs");

const readFile = (file, options) =>
    new Promise((success, failed) => {
        fs.readFile(file, options, (err, content) => {
            if (err) failed(err);
                return success(content);
        });
    });

    /*
    // Loop coba-coba >> mau buat array utk readFile

    const read = []; // bikin array baru

    for (let i = 1; i <= 10 ; i++) {
        var string0 = "readFile(";
        var string1 = "./contents/content[";
        var string2 = "].txt";
        var string3 = `"utf-8")`;
        var stringX = '${string0}${string1}${i}${string2}", "${string3}`;
        // console.log(stringX);
        read.push(stringX);
    }
    */

    const readAllFiles = async () => {
        try {
            let data = await Promise.all([
             readFile("./contents/content1.txt", "utf-8"),
             readFile("./contents/content2.txt", "utf-8"),
             readFile("./contents/content3.txt", "utf-8"),
             readFile("./contents/content4.txt", "utf-8"), 
             readFile("./contents/content5.txt", "utf-8"),
             readFile("./contents/content6.txt", "utf-8"), 
             readFile("./contents/content7.txt", "utf-8"),
             readFile("./contents/content8.txt", "utf-8"),
             readFile("./contents/content9.txt", "utf-8"),
             readFile("./contents/content10.txt", "utf-8"), 
            ]);
            
            for (let j = 0; j < data.length; j++) {
                console.log(data[j]);
            }
        } 
        catch (error) {
            console.log("Eh! Yah error.");
        }
    }

    readAllFiles();