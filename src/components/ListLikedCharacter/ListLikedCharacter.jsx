import React from 'react';

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import Character from '../Character/Character';
export function ListLikedCharacter({  onFavorite }) {
  const characters = useSelector(state => state.characters);
  const likedCharacters =  characters.filter(({ liked }) => liked);

  return (
    <>
      { likedCharacters.length !== 0 && <h1>Liked characters</h1> }

      <div className="listCharacter">
      {
       likedCharacters.map(character => (
          <Character
            className="listCharacter__character"
            character={character}
            onFavorite={onFavorite}
            key={character.id}
          />
        ))
      }
      </div>
    </>
  );
}

ListLikedCharacter.propTypes = {
  onFavorite: PropTypes.func.isRequired,
}
