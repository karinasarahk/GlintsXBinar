let fridge = [
    "Apple",
    "Carrot",
    "Milk",
    "Orange",
    "Lychee",
    "Cabbage"
]

function checkEggAvailability() {
    if (fridge.includes("Egg")) {
        buytheegg();
    } else {
        console.log("The egg exists!")
        }  
}