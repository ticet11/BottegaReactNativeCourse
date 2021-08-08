"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var x = 0;
// while loop
while (x < 10) {
    x++;
    console.log(x);
}
let players = [12, 56, 23, 78, 55];
// for in
for (let player in players) {
    console.log('for in: ' + player);
}
for (let player of players) {
    console.log('for of: ' + player);
}
