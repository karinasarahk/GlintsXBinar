// function to calculate the volume of a ball

function BallVolumeFormula(r) {
    let BallV = 4 / 3 * Math.PI * r ** 3;
    return BallV;
}

let r = 5;
Answer1 = BallVolumeFormula(r);
console.log("If the radius 'R' of the ball is " + r + " cm" + ", then its volume must be " + Answer1 + " cm^3.");
