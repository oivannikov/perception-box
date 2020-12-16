import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentCharacter } from '../../../redux/actions';

import { getCurrentCharacter } from '../../../api/characters';

import './PageCurrentCharacter.scss';

export function PageCurrentCharacter() {
  const { characterId } = useParams();
  const character = useSelector(state => state.currentCharacter);
  const dispatch = useDispatch();

  const { name } = character;
  
  useEffect(() => {
    getCurrentCharacter(characterId)
      .then(character => dispatch(setCurrentCharacter(character)));
  }, []);

  return (
    <h1 className="name">Name of { name }</h1>
  );
}
