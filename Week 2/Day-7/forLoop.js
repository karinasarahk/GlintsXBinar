// Basic Loop

let a = 0;

for (let i = 0; i <= 6; i++) {
    a +=2;
    console.log(a + " perulangan ke-" + i);
}

console.log(a);

console.log("============");

// Fibonacci
let b = [0, 1];

for (let i = 0; i < 10; i++) {
    b[i + 2] = b[i] + b[i + 1];
}

console.log(b);

/*
// Prime numbers 

for (var counter = 0; counter <= 100; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
    if (counter%i===0 && i!==counter) {
    notPrime = true;
    }
    }
    if (notPrime === false) {
    console.log(counter);
    }
    } 

    */