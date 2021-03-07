// function to calculate the volume of a ball

function BallVolumeFormula(r) {
    let BallV = 4 / 3 * Math.PI * r ** 3;
    return BallV;
}

let r = 5;
Answer1 = BallVolumeFormula(r);
console.log("If the radius 'R' of the ball is " + r + " cm" + ", then its volume must be " + Answer1 + " cm^3.");

// function to calculate the volume of a prism

function PrismVolumeFormula(x, y, h) {
    let Base = x * y / 2;
    let PrismV = Base * h;
    return PrismV;
}

let x = 5;
let y = 10;
let h = 15;

Answer2 = PrismVolumeFormula(x, y, h);

console.log("Whereas this prism's volume is " + Answer2 + " cm^3.");