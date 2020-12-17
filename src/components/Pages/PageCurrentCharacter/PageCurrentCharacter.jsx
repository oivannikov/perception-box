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

  const { name, height, mass, hair_color, skin_color, eye_color, birth_year,  gender, homeworld, films } = character;
  
  useEffect(() => {
    getCurrentCharacter(characterId)
      .then(character => dispatch(setCurrentCharacter(character)));
  }, []);

  return (
    <div className="currentCharacter">
      <ul>
        
      </ul>
    </div>
  );
}
