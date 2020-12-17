import { SET_CHARACTERS, SET_CHARACTERS_FROM_FIELD, SET_CURRENT_CHARACTER, UPDATE_CHARACTERS } from "./types";

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

export function setCurrentCharacter(character) {
  return {
    type: SET_CURRENT_CHARACTER,
    payload: character,
  }
}

export function setUpdatedCharacters(id) {
  return {
    type: UPDATE_CHARACTERS,
    id,
  }
}
