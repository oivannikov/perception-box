import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Loader } from '../../Loader/Loader';

import { setCurrentCharacter } from '../../../redux/actions';
import { getCurrentCharacter, getFilmsCharacter } from '../../../api/characters';

import './PageCurrentCharacter.scss';

export function PageCurrentCharacter() {
  const { characterId } = useParams();
  const character = useSelector(state => state.currentCharacter);
  const homeworld = useSelector(state => state.homeworld);
  const dispatch = useDispatch();

  const [isLoading, setLoading] = useState(false);
  const [nameFilms, setNameFilms] = useState([]);

  const id = Object.keys(character).length && character.url.split('/').slice(-2, -1)[0];
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year,  gender, films } = character;

  useEffect(() => {
    setLoading(true);

    getCurrentCharacter(characterId)
      .then(character => {
        dispatch(setCurrentCharacter(character));
        setLoading(false);
      });

  }, []);

  // useEffect(() => {
  //   let filmRequest = films.map(film => getFilmsCharacter(film));
    
  //   Promise.all(filmRequest)
  //     .then(result => setNameFilms(result));

  // }, [character]);

  return (
    <>
      { isLoading
        ? <Loader />
        : (
            <div className="characterInfo">
              <div className="characterInfo__wrapper">
                <h2 className="characterInfo__name">{ name }</h2>

                <ul className="characterInfo__parametrs">
                  <li className="characterInfo__parametr">
                    Height: {height}
                  </li>

                  <li className="characterInfo__parametr">
                    Mass: {mass}
                  </li>

                  <li className="characterInfo__parametr">
                    Hair color: {hair_color}
                  </li>

                  <li className="characterInfo__parametr">
                    Skin color: {skin_color}
                  </li>

                  <li className="characterInfo__parametr">
                    Eye color: {eye_color}
                  </li>

                  <li className="characterInfo__parametr">
                    Birth year: {birth_year}
                  </li>

                  <li className="characterInfo__parametr">
                    Gender: {gender}
                  </li>

                  <li className="characterInfo__parametr">
                    Homeworld: {homeworld[id]}
                  </li>

                  {/* <li className="characterInfo__parametr">
                    Films: {nameFilms.join(',')}
                  </li> */}
                </ul>
              </div>
            </div>
          )
      }
    </>
  );
}
