"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const fullName = (first, last) => first + ' ' + last;
// console.log(fullName('Brian', 'Kozub'));
const gradeGenerator = (grade) => {
    if (grade >= 90) {
        return "A";
    }
    else if (grade >= 80) {
        return "B";
    }
    else if (grade >= 70) {
        return "C";
    }
    else if (grade >= 60) {
        return "D";
    }
    else {
        return "F";
    }
};
console.log(gradeGenerator(90));
console.log(gradeGenerator(85));
console.log(gradeGenerator(72));
console.log(gradeGenerator(60));
console.log(gradeGenerator(17));
