"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CarShow;
(function (CarShow) {
    class MuscleCar {
        constructor(muscleCar) {
            var _a;
            this.make = muscleCar.make;
            this.model = muscleCar.model;
            this.year = muscleCar.year;
            this.cc = muscleCar.cc;
            this.weight = muscleCar.weight;
            this.options = new Array("big motor", ...((_a = muscleCar.options) !== null && _a !== void 0 ? _a : ""));
        }
        showCar() {
            return `This is a ${this.year} ${this.make} ${this.model}${this.options ? " with " + this.options.join(", ") : ""}.`;
        }
    }
    CarShow.MuscleCar = MuscleCar;
})(CarShow || (CarShow = {}));
var Race;
(function (Race) {
    class MuscleCar {
        constructor(muscleCar) {
            var _a;
            this.make = muscleCar.make;
            this.model = muscleCar.model;
            this.year = muscleCar.year;
            this.cc = muscleCar.cc;
            this.weight = muscleCar.weight;
            this.options = new Array("big motor", ...((_a = muscleCar.options) !== null && _a !== void 0 ? _a : ""));
        }
        showCar() {
            return `This is a ${this.year} ${this.make} ${this.model}${this.options ? " with " + this.options.join(", ") : ""}. It weighs in at ${this.weight}lbs. With a ${this.cc}CC engine, we'll see how she fairs.`;
        }
    }
    Race.MuscleCar = MuscleCar;
})(Race || (Race = {}));
let muscleCar0 = new CarShow.MuscleCar({
    make: "Ford",
    model: "Mustang",
    year: 1967,
    cc: 250,
    weight: 3000,
    options: ["leather seats"],
});
let muscleCar1 = new Race.MuscleCar({
    make: "Ford",
    model: "Mustang",
    year: 1967,
    cc: 250,
    weight: 3000,
    options: ["leather seats"],
});
console.log(muscleCar0.showCar());
console.log(muscleCar1.showCar());
