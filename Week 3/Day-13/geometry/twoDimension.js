const Geometry = require("./geometry");

class TwoDimension extends Geometry {
    constructor(name) {
        super(name, "2D");

        // make abstract class
        if (this.constructor == TwoDimension) {
            throw new Error("Cannot make object");
        }
    }

    // overriding method
    introduce() {
        super.introduce();
        console.log(`Hi this is a ${this.type} geometry`);
    }

    calculateArea() {
        console.log(`${this.name} area!`);
    }

    calculateCircumference() {
        console.log(`${this.name} circumference!`);
    }
}

module.exports = TwoDimension;