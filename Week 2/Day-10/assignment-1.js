console.clear();

let pantry = ["tomato", "broccoli", "kale", "cabbage", "apple"];

// simple way
/*
for (i = 0; i < pantry.length-1; i++) {
    console.log(pantry[i] + " is a healthy food, it's definitely worth to eat.");
}
*/

// alternative way - by pushing last item on Array using 'Pop'

/*
let last = pantry.pop(); // remove last item from pantry array

for (i = 0; i < pantry.length; i++) {
    console.log(pantry[i] + " is a healthy food, it's definitely worth to eat!");
}
*/


// 2nd alternative way - by removing an item by index position using 'Splice'


let removedItem = pantry.splice(4, 1); // remove last item from pantry array
console.log(removedItem);

for (i = 0; i < pantry.length; i++) {
    console.log(pantry[i] + " is a healthy food, it's definitely worth to eat!");
}
