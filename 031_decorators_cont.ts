@detailedLog('billing')
class AccountsPayable {
	constructor() {}
}

@detailedLog('engineering')
class Engineering {
    constructor() {}
}

function detailedLog(dashboard: string) {
	if (dashboard.length > 0) {
		console.log(`Working in the ${dashboard} department.`);
		return function (target: Object) {};
	} else {
        console.log("ERROR! Oh no!")
		return function (target: Object) {};
    }
}

// var ap0 = new AccountsPayable;
// var eng0 = new Engineering;