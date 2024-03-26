// authService.ts

import { userLogin } from '../types/user';

export async function loginUser(userData: userLogin) {
	try {
		const response = await fetch('https://your-api-url/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(userData)
		});

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();

		debugger
		console.log(data);

		return data;
	} catch (error) {
		console.error('There has been a problem with your fetch operation:', error);
		throw error;
	}
}