import { useState } from "react";
import "./App.css";
import CharacterList from "./pages/CharacterList";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen bg-gray-900 text-white p-4">
			<CharacterList />
		</div>
	);
}

export default App;
