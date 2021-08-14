"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function profile(user) {
    return `Hi there, ${user.fName} ${user.lName}. We sent a confirmation e-mail to ${user.email}. Click the link and we'll get started.`;
}
const user0 = {
    email: "test@testerson.com",
    fName: "Bront",
    lName: "Johnston",
};
console.log(profile(user0));
