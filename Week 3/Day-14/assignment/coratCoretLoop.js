const read = [];

for (let i = 1; i <= 10 ; i++) {
    var string0 = "readFile(";
    var string1 = "./contents/content[";
    var string2 = "].txt";
    var string3 = `"utf-8")`;
    var stringX = `${string0}${string1}${i}${string2}", "${string3}`;
    // console.log(stringX);
    read.push(stringX);
}

console.log(read);