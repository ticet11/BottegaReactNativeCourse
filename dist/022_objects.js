"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let realUser = {
    email: "test@user.com",
    fName: "Brad",
    lName: "Jenkins",
    sayHi: function () {
        return `Hi, I'm ${realUser.fName}!`;
    },
};
console.log(realUser.sayHi());
