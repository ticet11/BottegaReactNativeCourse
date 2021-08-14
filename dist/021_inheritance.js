"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Report {
    constructor(name) {
        this.name = name;
        this.companyProfile = name;
    }
}
class Invoice extends Report {
    constructor(name, total) {
        super(name);
        this.name = name;
        this.total = total;
    }
    PrintInvoice() {
        return this.name + ", " + this.total;
    }
}
class BillOfLading extends Report {
    constructor(name, city, state) {
        super(name);
        this.name = name;
        this.city = city;
        this.state = state;
    }
    printBol() {
        return this.name + ", " + this.city + ", " + this.state;
    }
}
var invoice = new Invoice("Avii", 300);
var bol = new BillOfLading("Google", "Los Angeles", "CA");
console.log(invoice.PrintInvoice());
console.log(bol.printBol());
