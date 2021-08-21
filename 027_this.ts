export {};
class Invoice {
	total: number;

	constructor(total: number) {
		this.total = total;
	}

	printTotal() {
		return this.total;
	}

	printLater(time: number) {
		return new Promise((resolve) => {
			setTimeout(() => resolve(this.total), time);
		}); // With arrow functions, this remains at the same level as outside the arrow function
	}
}

var invoice0 = new Invoice(400);
(async function () {
	// const returnedValue = invoice0.printTotal();
	// console.log(returnedValue);
	const returnedValue = await invoice0.printLater(5000);
	console.log(returnedValue);
})();
