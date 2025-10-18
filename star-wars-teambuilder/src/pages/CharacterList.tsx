import { useEffect, useState } from "react";
import axios from "axios";
import type { Character } from "../types/Character";

const CharacterList = () => {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCharacters = async () => {
			try {
				const res = await axios.get("https://akabab.github.io/starwars-api/api/all.json");
				console.log(res.data);
				setCharacters(res.data);
			} catch (err) {
				setError("Failed to fetch Star Wars characters");
			} finally {
				setLoading(false);
			}
		};
		fetchCharacters();
		console.log("characters", characters);
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div>
			<h1>Star Wars Characters</h1>
			<ul>
				{characters.map((char) => (
					<li key={char.id}>
						<span>{char.name}</span>
						<span>
							Height: {char.height} | Mass: {char.mass}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CharacterList;
