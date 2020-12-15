import { SET_CHARACTERS } from "./types";

const initialState = {
  characters: [],
  currentCharacter: {},
  authUser: false,
}

export const characterReducer = (state= initialState, action) => {
  switch(action.type) {
    case SET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      }

    default: return state;
  }
}