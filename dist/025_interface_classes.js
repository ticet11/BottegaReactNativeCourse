"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Admin {
    constructor(email) {
        this.email = email;
        this.role = "Admin";
    }
}
function profile(user) {
    return `Welcome, ${user.email}!`;
}
let admin0 = new Admin("test@jacksport.com");
class MuscleCar {
    constructor(muscleCar) {
        var _a;
        this.make = muscleCar.make;
        this.model = muscleCar.model;
        this.year = muscleCar.year;
        this.options = new Array("big motor", ...((_a = muscleCar.options) !== null && _a !== void 0 ? _a : ""));
    }
    showCar() {
        return `This is a ${this.year} ${this.make} ${this.model}${this.options ? " with " + this.options.join(", ") : ""}.`;
    }
}
let muscleCar0 = new MuscleCar({
    make: 'Ford',
    model: 'Mustang',
    year: 1967,
    options: ['leather seats'],
});
console.log(muscleCar0.showCar());
