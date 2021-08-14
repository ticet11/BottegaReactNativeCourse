export {};

interface InvoiceFunc {
    (name: string, total: number): void;
}

let myInvoice: InvoiceFunc;

myInvoice = function(x, y) {
    console.log(x);
    console.log(y);
}

myInvoice('Avii', 40);