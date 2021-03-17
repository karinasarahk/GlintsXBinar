const TwoDimension = require("./twoDimension");

class Square extends TwoDimension {
    constructor(length) {
        super("Square");
        this.length = length;
    }

    // Overloading method
    introduce(intro) {
        super.introduce();
        console.log(`${intro}, this is ${this.name}`);
    }

    // Overriding
    calculateArea() {
        super.calculateArea();
        let area = this.length ** 2;

        console.log(`This area is ${area} cm2 \n`);
    }

    calculateCircumference() {
        super.calculateCircumference();
        let circumference = 4 * this.length;

        console.log(`This circumference is ${circumference}`)
    }
}

let squareOne = new Square(15);
console.log(squareOne);
squareOne.introduce("Reza");
squareOne.calculateArea();
squareOne.calculateCircumference();

