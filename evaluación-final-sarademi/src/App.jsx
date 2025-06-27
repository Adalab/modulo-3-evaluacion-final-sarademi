import { useEffect, useState } from 'react';
import getCharacters from './components/API/api';
import CharacterList from './components/CharacterList';
import './App.css';
import NameFilter from './components/Filters/NameFilter';
import HouseFilter from './components/Filters/HouseFilter';



function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterHouse, setFilterHouse] = useState('');

  const handleFilterName = (event) => {
    setFilterName(event.target.value);
  };

  const handleFilterHouse = (event) => {
    setFilterHouse(event.target.value);
  };

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  const filteredCharacters = characters
    .filter((character) =>
      character.name.toLowerCase().includes(filterName.toLowerCase())
    )
    .filter((character) =>
      filterHouse === '' ? true : character.house === filterHouse
    );

  return (
    <div className="App">
      <img src="/harry-logo.png" alt="Harry Potter logo" className="header-logo" />
      <NameFilter filterName={filterName} handleFilterName={handleFilterName} />
      <HouseFilter filterHouse={filterHouse} handleFilterHouse={handleFilterHouse} />
      <CharacterList characters={filteredCharacters} />  
    </div>
  );
}


export default App;
