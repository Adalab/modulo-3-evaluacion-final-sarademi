const API_URL = 'https://hp-api.onrender.com/api/characters/';

const getCharacters = () => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      return data;
    });
};

export default getCharacters;