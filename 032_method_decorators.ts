export {};

class Employee {
    name: string;
	constructor(name: string) {
        this.name = name;
    }

    @admin
    fireAGuy() {
        console.log(`${this.name} just fired a guy!`);
    }
}

@detailedLog("billing")
class AccountsPayable extends Employee {
	constructor(name: string) {
		super(name);
	}

	sendBill() {
		console.log("Bill send.");
	}
}

@detailedLog("engineering")
class Engineering extends Employee {
	constructor(name: string) {
		super(name);
	}
}

function detailedLog(dashboard: string) {
	if (dashboard.length > 0) {
		console.log(`Working in the ${dashboard} department.`);
		return function (target: Object) {};
	} else {
		console.log("ERROR! Oh no!");
		return function (target: Object) {};
	}
}

function admin(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>): any {
    console.log('Doing the admin check.');
    return descriptor;
}

// var ap0 = new AccountsPayable;
var eng0 = new Engineering('Ben Davis');
eng0.fireAGuy();