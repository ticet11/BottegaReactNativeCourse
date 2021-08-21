"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name) {
        this.name = name;
    }
    fireAGuy() {
        console.log(`${this.name} just fired a guy!`);
    }
}
__decorate([
    admin
], Employee.prototype, "fireAGuy", null);
let AccountsPayable = class AccountsPayable extends Employee {
    constructor(name) {
        super(name);
    }
    sendBill() {
        console.log("Bill send.");
    }
};
AccountsPayable = __decorate([
    detailedLog("billing")
], AccountsPayable);
let Engineering = class Engineering extends Employee {
    constructor(name) {
        super(name);
    }
};
Engineering = __decorate([
    detailedLog("engineering")
], Engineering);
function detailedLog(dashboard) {
    if (dashboard.length > 0) {
        console.log(`Working in the ${dashboard} department.`);
        return function (target) { };
    }
    else {
        console.log("ERROR! Oh no!");
        return function (target) { };
    }
}
function admin(target, propertyKey, descriptor) {
    console.log('Doing the admin check.');
    return descriptor;
}
// var ap0 = new AccountsPayable;
var eng0 = new Engineering('Ben Davis');
eng0.fireAGuy();
