export {};

console.log(fullName("Brian", "Kozub"));
// Expression must be defined before it's called.
// console.log(expFullName1('Brian', 'Kozub'));
// console.log(expFullName2('Brian', 'Kozub'));

// Function Declaration
function fullName(first: string, last: string): string {
	return first + " " + last;
}

// Function Expression
let expFullName1;

expFullName1 = function (first: string, last: string): string {
	return first + " " + last;
};

let expFullName2: (first: string, last: string) => string = function (
	first: string,
	last: string
) {
	return first + " " + last;
};

console.log(fullName("Brian", "Kozub"));
console.log(expFullName1("Brian", "Kozub"));
console.log(expFullName2("Brian", "Kozub"));
