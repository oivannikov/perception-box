import { SET_CHARACTERS, SET_CHARACTERS_FROM_FIELD, SET_CURRENT_CHARACTER, SET_HOMEWORLD, UPDATE_CHARACTERS } from "./types";

const initialState = {
  characters: [],
  currentCharacter: {},
  authUser: false,
  charactersFromField: [],
  homeworld: {},
}

function updateCharacters(characters, id) {
  const updatedIndex = characters.findIndex(character => character.id === id);
  
  const updatedCharacter = characters[updatedIndex];

  return [...characters.slice(0, updatedIndex), {...updatedCharacter, liked: !updatedCharacter.liked}, ...characters.slice(updatedIndex + 1)];
}

export const characterReducer = (state= initialState, action) => {
  switch(action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      }

    case SET_CHARACTERS_FROM_FIELD:
      return {
        ...state,
        charactersFromField: action.payload,
    }

    case SET_CURRENT_CHARACTER:
      return {
        ...state,
        currentCharacter: action.payload,
      }

    case UPDATE_CHARACTERS:
      return {
        ...state,
        characters: updateCharacters(state.characters, action.id),
      }
    
    case SET_HOMEWORLD:
      return {
        ...state,
        homeworld: {...state.homeworld, ...action.payload},
      }
    

    default: return state;
  }
}

