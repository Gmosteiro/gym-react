export interface User {
	name: string;
	last_name: string;
	email: string;
	password: string;
}

export type UserLogin = {
	email: string;
	password: string;
}