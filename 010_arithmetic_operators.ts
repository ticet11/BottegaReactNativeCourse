// +, -, *, /, %, ++, --

var numOne: number = 1;
var numTwo: number = 2;

// Addition
console.log(`Addition: ${numOne} + ${numTwo} = ` + (numOne + numTwo));

// Subtration
console.log(`Subtraction: ${numTwo} - ${numOne} = ` + (numTwo - numOne));

// Multiplication
console.log(`Multiplication: ${numTwo} * ${numOne} = ` + numTwo * numOne);

// Division
console.log(`Division: ${numTwo} / ${numOne} = ` + numTwo / numOne);

// Modulus
numOne = 9;
numTwo = 15;
console.log(`Modulus: ${numTwo} % ${numOne} = ` + (numTwo % numOne));

// Incrementor
console.log("Incrementor:");
for (var i = 0; i < numTwo; i++) {
	numOne++;
	console.log(`numOne++ (x${i + 1}) = ` + numOne);
}

// Decrementor
console.log("Decrementor:");
for (var i = 0; i < numTwo; i++) {
	numOne--;
	console.log(`numOne-- (x${i + 1}) = ` + numOne);
}
