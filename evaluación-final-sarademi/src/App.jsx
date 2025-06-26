import { useEffect, useState } from 'react';
import getCharacters from './components/API/api';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div className="App">
      <img src="/harry-logo.png" alt="Harry Potter logo" className="header-logo" />
      <CharacterList characters={characters} />
    </div>
  );
}

export default App;
