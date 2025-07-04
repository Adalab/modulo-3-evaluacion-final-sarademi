import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types'; 
import './CharacterDetail.css';

function CharacterDetail({ characters }) {
  const { characterId } = useParams();
  const character = characters.find(
    (char) => char.id === characterId || char.name === characterId
  );

  const houseClass = character?.house ? character.house.toLowerCase() : 'unknown';
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  };

  const houseEmblems = {
    Gryffindor: '/gryffindor.png',
    Slytherin: '/slytherin.png',
    Ravenclaw: '/ravenclaw.png',
    Hufflepuff: '/hufflepuff.png'
  };

  if (!character) {
    return (
      <div className="character-detail-wrapper">
        <div className="character-card-detail unknown">
          <h2>El personaje que buscas no existe</h2>
          <button className="back-button" onClick={handleBackClick}>⬅ Volver</button>
        </div>
      </div>
    );
  }

  return (
    <div className="character-detail-wrapper">
      <div className={`character-card-detail ${houseClass}`}>
        <img
          src={character.image || 'https://placehold.co/400x300?text=Harry+Potter'}
          alt={`Foto de ${character.name}`}
        />
        <h2>{character.name}</h2>
        {character.house && (
          <img
            src={houseEmblems[character.house]}
            alt={`Emblema de ${character.house}`}
            className="emblem"
          />
        )}
        <p>Casa: {character.house || 'Desconocida'}</p>
        <p>Estado: {character.alive ? '❤️ Vivo' : '☠️ Muerto'}</p>
        <p>Género: {character.gender}</p>
        <p>Especie: {character.species}</p>
        {character.alternate_names.length > 0 && (
          <p>Otros nombres: {character.alternate_names.join(', ')}</p>
        )}
        <button className="back-button" onClick={handleBackClick}>⬅ Volver</button>
      </div>
    </div>
  );
}

CharacterDetail.propTypes = {
  characters: PropTypes.array.isRequired
};

export default CharacterDetail;
