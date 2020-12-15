import { SET_CHARACTERS, SET_CHARACTERS_FROM_FIELD } from "./types";

export function setCharacters(characters) {
  return {
    type: SET_CHARACTERS,
    payload: characters,
  }
}

export function setCharactersFromField(characters) {
  return {
    type: SET_CHARACTERS_FROM_FIELD,
    payload: characters,
  }
}
