export {};

var x: number = 0;

// while loop
while (x < 10) {
	x++;
	console.log(x);
}

let players: number[] = [12, 56, 23, 78, 55];

// for in
for (let player in players) {
	console.log("for in: " + player);
}

for (let player of players) {
	console.log("for of: " + player);
}
