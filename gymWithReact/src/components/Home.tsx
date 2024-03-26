// Home.tsx
import { useContext } from 'react';
import UserContext from './UserContext';

export default function Home() {
	const user = useContext(UserContext);

	return (
		<figure className="h-screen flex bg-gray-100">
			<div className="w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-1">
				<blockquote className="text-2xl font-medium text-center">
					<p className="text-lg font-semibold">Welcome! {user?.name}</p>
				</blockquote>
			</div>
		</figure>
	);
}