export {};

let dbQuery = function(): void {
    setTimeout(() => 'query results', 3000);
}

function loadPage(q: () => void) {
    console.log('header');
    q();
    console.log('sidebar');
    console.log('footer');
}

loadPage(dbQuery);