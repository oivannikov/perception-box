import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

export async function getCharacters() {
  const response = await axios.get(`${BASE_URL}/people/`);
  const result = await response.data;
  const characters = await result.results;

  console.log(characters);
  return characters;
}

export async function getCharactersFromField(param, cancelation) {
  const CancelToken = axios.CancelToken;

  const response = await axios.get(`${BASE_URL}/people/?search=${param}`, {
    cancelToken: new CancelToken(cancelation),
  });

  const result = response.data;
  const characters = result.results;

  return characters;
}

export async function getCurrentCharacter(characterId) {
  const response = await axios.get(`${BASE_URL}/people/${characterId}`);
  const character = await response.data;
  
  return character;
}

export async function getHomeworldCharacter(urlHomeworld) {
  const response = await axios.get(`https://cors-anywhere.herokuapp.com/${urlHomeworld}`);
  const result = await response.data;

  return result.name;
}

export async function getFilmsCharacter(urlFilm) {
  const response = await axios.get(`https://cors-anywhere.herokuapp.com/${urlFilm}`);
  const result = await response.data;
  
  return result.title;
}