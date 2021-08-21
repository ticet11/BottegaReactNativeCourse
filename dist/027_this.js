"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Invoice {
    constructor(total) {
        this.total = total;
    }
    printTotal() {
        return this.total;
    }
    printLater(time) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(this.total), time);
        }); // With arrow functions, this remains at the same level as outside the arrow function
    }
}
var invoice0 = new Invoice(400);
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        const returnedValue = invoice0.printTotal();
        console.log(returnedValue);
        // const returnedValue = await invoice0.printLater(5000);
        // console.log(returnedValue);
    });
})();
