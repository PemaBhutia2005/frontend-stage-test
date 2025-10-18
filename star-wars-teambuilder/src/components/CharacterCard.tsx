import type { Character } from "../types/Character";
import "../styles/CharacterCard.css";

interface CharacterCardProps {
	character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
	return (
		<div className="character-card">
			<img src={character.image} alt={character.name} className="character-image" />
			<div className="character-info">
				<h2 className="character-name">{character.name}</h2>
				<p>
					<strong>Height:</strong> {character.height}m
				</p>
				<p>
					<strong>Mass:</strong> {character.mass}kg
				</p>
			</div>
		</div>
	);
};

export default CharacterCard;
