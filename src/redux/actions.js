import { SET_CHARACTERS } from "./types";

export function setCharacters(characters) {
  return {
    type: SET_CHARACTERS,
    payload: characters,
  }
}
