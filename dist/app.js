"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Howdy");
function welcomePerson(person) {
    console.log(`Hey, ${person.firstName}!`);
}
const james = {
    firstName: "Django",
};
welcomePerson(james);
