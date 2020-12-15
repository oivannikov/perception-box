import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

export async function getCharacters() {
  const response = await axios.get(`${BASE_URL}/people/`);
  const result = await response.data;
  const characters = await result.results;

  return characters;
}

export async function getCharactersFromField(param) {
  const response = await axios.get(`${BASE_URL}/people/?search=${param}`);
  const result = await response.data;
  const characters = await result.results;

  console.log(characters);
  return characters;
}

