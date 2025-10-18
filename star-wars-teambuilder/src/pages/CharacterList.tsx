import { useEffect, useState } from "react";
import axios from "axios";
import type { Character } from "../types/Character";
import CharacterCard from "../components/CharacterCard";
import "../styles/CharacterList.css";

const CharacterList = () => {
	const [characters, setCharacters] = useState<Character[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCharacters = async () => {
			try {
				const res = await axios.get("https://akabab.github.io/starwars-api/api/all.json");
				setCharacters(res.data);
			} catch (err) {
				setError("Failed to fetch Star Wars characters");
			} finally {
				setLoading(false);
			}
		};
		fetchCharacters();
	}, []);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;

	return (
		<div className="character-list">
			<h1 className="character-list-title">Star Wars Characters</h1>
			<div className="character-grid">
				{characters.map((char) => (
					<CharacterCard key={char.id} character={char} />
				))}
			</div>
		</div>
	);
};

export default CharacterList;
