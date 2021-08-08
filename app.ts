export {};

console.log("Howdy");

function welcomePerson(person: Person) {
	console.log(`Hey, ${person.firstName}!`);
}

const james = {
	firstName: "Django",
};

welcomePerson(james);

interface Person {
	firstName: string;
}
