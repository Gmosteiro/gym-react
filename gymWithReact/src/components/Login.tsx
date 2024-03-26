import { ChangeEvent, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { User } from '../types/user';
import ErrorMessage from './Common/errorMessage';

interface LoginProps {
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const Login = ({ setUser }: LoginProps) => {

	const [showError, setShowError] = useState({
		title: "",
		message: "",
	});

	const [formData, setFormData] = useState({
		user: {
			email: "",
			password: "",
		},
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			user: {
				...formData.user,
				[e.target.name]: e.target.value,
			},
		});
	};

	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault();
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.user.email) || formData.user.password === "") {
			setShowError({
				title: "Error",
				message: "Invalid email format or empty password",
			});
		} else {
			try {
				const data = await loginUser(formData.user);
				setUser(data); // set user data

				const navigate = useNavigate();
				navigate('/home');

			} catch (error) {
				console.error('There has been a problem with your fetch operation:', error);
			}
		}
	}

	return (
		<>
			<Helmet>
				<title>Login</title>
			</Helmet>
			<figure className="h-screen flex bg-gray-100">
				<div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
					<blockquote className="text-2xl font-medium text-center">
						<p className="text-lg font-semibold">Welcome!</p>
					</blockquote>

					<div className="text-primary m-6">
						<div className="flex items-center mt-3 justify-center">
							<h1 className="text-2xl font-medium text-primary mt-4 mb-2">
								Login to your account
							</h1>
						</div>

						<form onSubmit={handleLogin}>
							<label className="text-left">Email:</label>
							<input name="email" type="text" value={formData.user.email}
								onChange={handleChange}
								placeholder="Username"
								className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							/>

							<label>Password:</label>
							<input name="password" type="password" value={formData.user.password}
								onChange={handleChange}
								placeholder="Password"
								className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
							/>

							<ErrorMessage message={showError.message} title={showError.title} />

							<div className="flex items-center mt-3 justify-center">
								<button
									type="submit"
									className="bg-blue-700 hover:bg-blue-500 py-2 px-4 text-md text-white rounded border border-blue focus:outline-none focus:border-black"
									value="Login">Login
								</button>
							</div>
						</form>

						<div className="flex items-center mt-3 justify-center">
							<button className="justify-center text-blue-500 hover:underline">
								Need to register? <a href="/register">Sign up</a> for free
							</button>
						</div>
					</div>
				</div>
			</figure>
		</>
	);
}


export default Login;