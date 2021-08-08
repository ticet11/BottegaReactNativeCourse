export {};

let names: string[] = ["Brian", "Dan", "Django", "Bango"];
let i: number = 0;

(function () {
	for (i; i < names.length; i++) {
		console.log(i);
	}
	console.log("Final: " + i);
})();
