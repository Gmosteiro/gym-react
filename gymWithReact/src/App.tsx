import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import UserContext from './components/UserContext';
import { useState } from 'react';
import { User } from './types/user';

const App = () => {
	const [user, setUser] = useState<User | null>(null);

	return (
		<UserContext.Provider value={user}>
			<Router>
				<Routes>
					<Route path="/login" element={<Login setUser={setUser} />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</Router>
		</UserContext.Provider>
	);
}

export default App;