// declare class
class Person {
    static isAlive = true;

    constructor(name, address, isMarried, nickName) {
        this.name = name;
        this.address = address;
        this.isMarried = isMarried;
        this.nickName = nickName;
    }
    walk() {
        console.log(`${this.nickName} is walking!`);
    }
    run() {
        console.log(`${this.name} is running!`);
    }

    //Instance method
    run() {
        
    }

    // call a function in another function within one class
    jogging() {
        this.walk();
        this.run();
    }

    // static method, can't call instance property
    static talk(message) {
        console.log(`Someone talk, "${message}"`);
    }
}

// add instance method

Person.prototype.watch = function () {
    console.log(`${this.Nickname} is watching football!`);
}


let person1 = new Person("Fahmi Alfareza", "Magelang", false, "Reza"); // declare object
let person2 = new Person("Abraham", "Jakarta", true, "Abi"); //declare object

console.log(person1);
person1.walk(); // run function of object
person1.run(); // run function of object
person2.walk(); // run function of object

console.log(person2.isAlive); // undefined
console.log(Person.isAlive); // 

Person.talk("Hey, you!"); // call static method
Person.sleep();