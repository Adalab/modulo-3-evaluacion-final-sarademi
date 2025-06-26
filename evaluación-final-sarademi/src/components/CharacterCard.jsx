function CharacterCard({ character }) {
  const placeholder = 'https://placehold.co/400x300?text=Harry+Potter';
  const image = character.image ? character.image : placeholder;

  return (
    <article className="character-card">
      <img src={image} alt={`Foto de ${character.name}`} />
      <h2>{character.name}</h2>
      <p>{character.species}</p>
    </article>
  );
}

export default CharacterCard;