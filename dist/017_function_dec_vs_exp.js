"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log(fullName('Brian', 'Kozub'));
// Expression must be defined before it's called.
// console.log(expFullName1('Brian', 'Kozub')); 
// console.log(expFullName2('Brian', 'Kozub'));
// Function Declaration
function fullName(first, last) {
    return first + ' ' + last;
}
// Function Expression
let expFullName1;
expFullName1 = function (first, last) {
    return first + ' ' + last;
};
let expFullName2 = function (first, last) {
    return first + ' ' + last;
};
console.log(fullName('Brian', 'Kozub'));
console.log(expFullName1('Brian', 'Kozub'));
console.log(expFullName2('Brian', 'Kozub'));
