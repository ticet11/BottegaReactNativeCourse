export {};

class Invoice{
    companyProfile: string;

    constructor(public name, public city, public state) {
        this.companyProfile = name + ', ' + city + ', ' + state;
    }
}

var aviiInvoice = new Invoice('Avii', 'Lehi', 'Utah');
var yahooInvoice = new Invoice('Yahoo', 'San Francisco', 'California');

console.log(aviiInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);