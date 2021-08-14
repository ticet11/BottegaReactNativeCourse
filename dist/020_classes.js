"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Invoice {
    constructor(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ', ' + city + ', ' + state;
    }
}
var aviiInvoice = new Invoice('Avii', 'Lehi', 'Utah');
var yahooInvoice = new Invoice('Yahoo', 'San Francisco', 'California');
console.log(aviiInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
