// Array

let fruits = ["Apple", "Pineapple", "Orange", "Watermelon"];

console.log("All fruits: " + fruits); // Call the whole array
console.log("fruits[1]: " + fruits[1]); // call one thing on array


// Object

let person = {
    name: "Karina K",
    address: "Magelang",
    married: false,
    age: 23,
};

console.log(person); // print person variable

console.log("Name: " + person.name); /// the first way to call specific bit of data
console.log ("address: " + person["address"]); // alternative way to call specific bit of data

// remember to use [] <-- for arrays and objects, instead of () <-- for function

if (person.isMarried == true) {
    // if person is married
    console.log (person.name + " has been married!");
} else {
    // if person isn't married
    console.log(person.name + " has not been married");
}