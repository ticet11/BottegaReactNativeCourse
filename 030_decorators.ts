class Post {
    @processOne()
    @processTwo()
    someFunction() {

    }
}

function processOne() {
    console.log('processOne running');
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('processOne called');
    }
}

function processTwo() {
    console.log('processTwo running');
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('processTwo called');
    }
}