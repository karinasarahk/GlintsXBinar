// normal function 
function calc(a, b) {
    return a * b;
}

console.log(calc(11, 12));


// Arrow Function
let calcArrow;
const calcArrow = (x, y) => {
    return x * y;
};

console.log(calcArrow(10,11));

// OR

let W;
const W = (x, y) => {
    return x * y;
};

console.log(W(10,11));


//Currying Function
const calculate = (x) => (y) => (z) => {
    return x * y * z;
}

console.log(calculate(11)(12)(13));

// Addition
const App = () => {
    const abi = () => {
        return "Abi";
    };

    return abi();    
}

console.log(App());