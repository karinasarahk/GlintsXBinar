class Geometry {
    constructor(name, type) {
        // make abstract class

        if (this.constructor == Geometry) {
            throw new Error("Cannot make object!");
        }

      this.name = name;
      this.type = type;
    }

    introduce() {
        this.#accessIntroduce();
    }
  
    // private access
    #accessIntroduce() {
      console.log("Hello, this is Geometry");
    }
  }
  
  module.exports = Geometry;