import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import type { Character } from "../types/Character";
import "../styles/CharacterDetail.css";

const CharacterDetail = () => {
	const { id } = useParams<{ id: string }>();
	const [character, setCharacter] = useState<Character | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCharacter = async () => {
			try {
				const res = await axios.get("https://akabab.github.io/starwars-api/api/all.json");
				const found = res.data.find((c: Character) => c.id === Number(id));
				setCharacter(found);
			} catch {
				setError("Failed to fetch character data");
			} finally {
				setLoading(false);
			}
		};
		fetchCharacter();
	}, [id]);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>{error}</p>;
	if (!character) return <p>Character not found</p>;

	return (
		<div className="character-detail">
			<Link to="/" className="back-button">
				← Back to list
			</Link>
			<div className="detail-card">
				<img src={character.image} alt={character.name} className="detail-image" />
				<div className="detail-info">
					<h1>{character.name}</h1>
					<p>
						<strong>Height:</strong> {character.height}m
					</p>
					<p>
						<strong>Mass:</strong> {character.mass}kg
					</p>
					{character.affiliations.length > 0 && (
						<div>
							<strong>Affiliations:</strong>
							<ul>
								{character.affiliations.map((a, i) => (
									<li key={i}>{a}</li>
								))}
							</ul>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CharacterDetail;
