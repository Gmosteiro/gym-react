import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'; // adjust the path according to your file structure
// import OtherComponent from './OtherComponent'; // another component

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;