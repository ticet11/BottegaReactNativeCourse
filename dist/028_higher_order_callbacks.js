"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let dbQuery = function () {
    setTimeout(() => console.log('query results'), 3000);
};
function loadPage(q) {
    console.log('header');
    q();
    console.log('sidebar');
    console.log('footer');
}
loadPage(dbQuery);
