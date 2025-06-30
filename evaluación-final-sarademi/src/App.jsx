import { useEffect, useState } from 'react';
import getCharacters from './components/API/api';
import CharacterList from './components/CharacterList';
import './App.css';
import NameFilter from './components/Filters/NameFilter';
import HouseFilter from './components/Filters/HouseFilter';
import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './components/CharacterDetail';



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
  
  const sortedCharacters = [...filteredCharacters].sort((a, b) =>
  a.name.localeCompare(b.name)
  );

  return (
  <div className="App">
    <img src="/harry-logo.png" alt="Harry Potter logo" className="header-logo" />

    <Routes>
     
      <Route
        path="/"
        element={
          <>
            <NameFilter filterName={filterName} handleFilterName={handleFilterName} />
            <HouseFilter filterHouse={filterHouse} handleFilterHouse={handleFilterHouse} />
            <CharacterList characters={sortedCharacters} />
          </>
        }
      />
      <Route path="/character/:characterId" element={<CharacterDetail characters={characters} />} />
    </Routes>
  </div>
);
}


export default App;
