export {};

interface User {
	email: string;
	fName: string;
	lName: string;
    birthDate?: Date; // optional property
}

function profile(user: User): string {
	return `Hi there, ${user.fName} ${user.lName}. We sent a confirmation e-mail to ${user.email}. Click the link and we'll get started.`;
}

const user0: User = {
	email: "test@testerson.com",
	fName: "Bront",
	lName: "Johnston",
};

console.log(profile(user0));
