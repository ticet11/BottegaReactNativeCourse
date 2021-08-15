export {};

namespace CarShow {
	export interface ICar {
		make: string;
		model: string;
		year: number;
        cc?: number;
		weight?: number;
		options?: Array<string>;
	}

	export class MuscleCar implements ICar {
		make: string;
		model: string;
		year: number;
        cc?: number;
		weight?: number;
		options: Array<string>;

		constructor(muscleCar: ICar) {
			this.make = muscleCar.make;
			this.model = muscleCar.model;
			this.year = muscleCar.year;
            this.cc = muscleCar.cc;
			this.weight = muscleCar.weight;
			this.options = new Array("big motor", ...(muscleCar.options ?? ""));
		}

		showCar(): string {
			return `This is a ${this.year} ${this.make} ${this.model}${
				this.options ? " with " + this.options.join(", ") : ""
			}.`;
		}
	}
}

namespace Race {
	export interface ICar {
		make: string;
		model: string;
		year: number;
		cc: number;
		weight: number;
		options?: Array<string>;
	}

	export class MuscleCar implements ICar {
		make: string;
		model: string;
		year: number;
		cc: number;
		weight: number;
		options: Array<string>;

		constructor(muscleCar: ICar) {
			this.make = muscleCar.make;
			this.model = muscleCar.model;
			this.year = muscleCar.year;
			this.cc = muscleCar.cc;
			this.weight = muscleCar.weight;
			this.options = new Array("big motor", ...(muscleCar.options ?? ""));
		}

		showCar(): string {
			return `This is a ${this.year} ${this.make} ${this.model}${
				this.options ? " with " + this.options.join(", ") : ""
			}. It weighs in at ${this.weight}lbs. With a ${
				this.cc
			}CC engine, we'll see how she fairs.`;
		}
	}
}

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
