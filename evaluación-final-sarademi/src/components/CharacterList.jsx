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

export default CharacterList;