import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';

function CharacterList({ characters }) {
  return (
    <section className="character-list">
      {characters.map((character, index) => (
        <CharacterCard key={index} character={character} />
      ))}
    </section>
  );
}

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      image: PropTypes.string,
      species: PropTypes.string,
    })
  ).isRequired,
};

export default CharacterList;