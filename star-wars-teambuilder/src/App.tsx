import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CharacterList from "./pages/CharacterList";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
	const [count, setCount] = useState(0);

	return (
		<Router>
			<div className="min-h-screen bg-gray-900 text-white p-4">
				<Routes>
					<Route path="/" element={<CharacterList />} />
					<Route path="/character/:id" element={<CharacterDetail />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
