import { useEffect, useState } from 'react';
import getCharacters from './components/API/api';
import CharacterList from './components/CharacterList';
import './App.css';
import NameFilter from './components/Filters/NameFilter';


function App() {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const handleFilterName = (event) => {
  setFilterName(event.target.value);
};

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  const filteredCharacters = characters.filter((character) =>
      character.name.toLowerCase().includes(filterName.toLowerCase())
      );

  return (
    <div className="App">
      <img src="/harry-logo.png" alt="Harry Potter logo" className="header-logo" />
      <NameFilter filterName={filterName} handleFilterName={handleFilterName} />
      <CharacterList characters={filteredCharacters} />  
    </div>
  );
}

export default App;
