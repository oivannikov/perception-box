import React, { useEffect } from 'react';

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
      // У текущего сharacter не будет полей id и liked (если нужно, нужно прописать функцию впереди characterWithId() )
  }, []);

  return (
    <h1 className="name">Name of { name }</h1>
  );
}
