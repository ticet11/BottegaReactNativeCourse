"use strict";
// functions have access to any public variables in outer scope
// function nameFunc(name: string): void {
// 	var n: string = name;
// 	function printName() {
// 		console.log(n);
// 	}
// 	printName();
// }
// nameFunc("Brian Kozub");
/* --------------------------------------- */
// Inner function maintains access to outer scope even AFTER values are returned
// function nameFunc(name: string) {
// 	var n: string = name;
// 	return function () {
// 		console.log(n);
// 	};
// }
// var nameAgain = nameFunc("Brian Kozub");
// nameAgain();
/* --------------------------------------- */
function lineup() {
    let nowBatting = 1;
    function nextBatter() {
        nowBatting++;
    }
    return {
        // nextBatter() {
        // 	nowBatting++;
        // },
        currentBatter: function () {
            return nowBatting;
        },
        nextBatter,
    };
}
let batters = lineup();
let pitchers = lineup();
while (batters.currentBatter() <= 20) {
    if (batters.currentBatter() === 11 || batters.currentBatter() === 1) {
        console.log("Pitcher: " + pitchers.currentBatter());
    }
    console.log("Batter: " + batters.currentBatter());
    batters.nextBatter();
}
