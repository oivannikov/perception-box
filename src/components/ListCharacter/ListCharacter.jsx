import React from 'react';

import { useSelector } from 'react-redux';

import Character from '../Character/Character';

import './ListCharacter.scss';

export function ListCharacter() {
  const characters = useSelector(state => state.characters);

  return (
    <div className="listCharacter">
    {
      characters.map((character, index) => (
        <Character className="listCharacter__character" character={character} key={index}/>
      ))
    }
    </div>
    
  );
}
