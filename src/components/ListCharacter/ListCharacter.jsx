import React from 'react';

import { useSelector } from 'react-redux';

import { ListLikedCharacter } from '../ListLikedCharacter/ListLikedCharacter';

import Character from '../Character/Character';

import './ListCharacter.scss';

export function ListCharacter({ onFavorite }) {
  const characters = useSelector(state => state.characters);

  return (
    <>
      <div className="listCharacter">
      {
        characters.map(character => (
          <Character
            className="listCharacter__character"
            character={character}
            onFavorite={onFavorite}
            key={character.id}
          />
        ))
      }
      </div>

      <ListLikedCharacter  onFavorite={onFavorite} />
    </>
  );
}
