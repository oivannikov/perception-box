import axios from "axios";

const BASE_URL = "https://swapi.dev/api";

export async function getCharacters() {
  const response = await axios.get(`${BASE_URL}/people/`);
  const result = await response.data;
  const characters = await result.results;

  return characters;
}

