import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CharacterCard({ character }) {
  const placeholder = 'https://placehold.co/400x300?text=Harry+Potter';
  const image = character.image ? character.image : placeholder;

  return (
    <Link to={`/character/${character.id}`}>
    <article className="character-card">
      <img src={image} alt={`Foto de ${character.name}`} />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
    </article>
    </Link>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    species: PropTypes.string.isRequired,
  }).isRequired
};

export default CharacterCard;