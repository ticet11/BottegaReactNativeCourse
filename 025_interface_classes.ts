export {};

// Loosely connect Interface with Class
interface User {
	email: string;
	fName?: string;
	lName?: string;
}

class Admin {
	role: string;
	constructor(public email: string) {
		this.role = "Admin";
	}
}

function profile(user: User): string {
	return `Welcome, ${user.email}!`;
}

let admin0 = new Admin("test@jacksport.com");

// console.log(profile(admin0));

// Direct implementation
interface ICar {
	make: string;
	model: string;
	year: number;
	options?: Array<string>;
}

class MuscleCar implements ICar {
	make: string;
	model: string;
	year: number;
	options: Array<string>;

	constructor(muscleCar: ICar) {
		this.make = muscleCar.make;
		this.model = muscleCar.model;
		this.year = muscleCar.year;
		this.options = new Array("big motor", ...(muscleCar.options ?? ""));
	}

	showCar(): string {
		return `This is a ${this.year} ${this.make} ${this.model}${this.options ? " with " + this.options.join(", ") : ""}.`;
	}
}

let muscleCar0 = new MuscleCar({
    make: 'Ford',
    model: 'Mustang',
    year: 1967,
    options: ['leather seats'],
})

console.log(muscleCar0.showCar());

