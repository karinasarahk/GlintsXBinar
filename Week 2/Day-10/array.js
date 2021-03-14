console.clear();

let fridge = ["Apple", "Milk", "Carrot", "Orange", "Lychee", "Cabbage"];

console.log(fridge.includes("Apple")); // does fridge include apple?
console.log(fridge.includes("Banana")); // does fridge include banana?


// with manual case-insensitive
for (var i = 0; i <fridge.length; i++) {
    if (fridge(i).toLowerCase() == "apple") {
        console.log(true);
    }
}

