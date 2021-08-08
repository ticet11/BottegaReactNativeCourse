// function printAddress(street: string, streetTwo?: string, city: string = 'Lehi', state = 'UT') {
//     return street + (streetTwo ? ' ' + streetTwo : '') + ' ' + city + ', ' + state;
// }

// console.log(printAddress('123 potato'));

function favoriteFoods(person: string, ...foods: string[]) {
	console.log(person + "'s favorite foods:");
	for (let food of foods) {
		console.log(" - " + food);
	}
}

favoriteFoods("Brian", "potate", "sangwhich", "gabagool");
