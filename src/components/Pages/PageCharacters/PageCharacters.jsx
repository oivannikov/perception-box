import { useState, useEffect } from 'react';

import FacebookLogin from 'react-facebook-login';

import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { setCharacters, setCharactersFromField, setUpdatedCharacters } from '../../../redux/actions';

import { charactersWithId, updateFavoritesStorage } from '../../Utils/Utils';

import { useDebounce } from '../../Hooks/debouncedSearch';
import { ListCharacter } from '../../ListCharacter/ListCharacter';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { getCharacters, getCharactersFromField } from '../../../api/characters';

import './PageCharacters.scss';

export function PageCharacters() {
  const charactersFromField = useSelector(state => state.charactersFromField);

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const history = useHistory();
  // Получаю данные сразу при регистрации
  useEffect(() => {
    getCharacters()
      .then(result => {
        const characters = charactersWithId(result);

        dispatch(setCharacters(characters));
      });
  }, []);

 // Получаю данные когда ввожу в форму
  useEffect(() => {
    let cancel;

    const cancelation = (c) => {
      cancel = c;
    }

    if (debouncedSearchTerm) {
      getCharactersFromField(debouncedSearchTerm, cancelation)
        .then(result => {
          const characters = charactersWithId(result);

          dispatch(setCharactersFromField(characters));
        });
    }

    return () => {
      cancel && cancel();
    }

    }, [debouncedSearchTerm]);

    const handleCharacterClick = ({ id }) => {
      history.push(`/characters/${id}`);
    };

    function handleFavorite(id) {
      updateFavoritesStorage(id);
      dispatch(setUpdatedCharacters(id));
    }

  return (
    <>
      <Autocomplete
        className="app__autocomplete"
        options={charactersFromField || []}
        getOptionLabel={(option) => option.name}
        renderOption={(option) => <div style={{width: "100%"}} onClick={() => handleCharacterClick(option)}>{option.name}</div>}
        renderInput={(params) => 
          <TextField
            {...params}
            className="app__field"
            label="Searching"
            variant="outlined"
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
          /> }
      />

      <ListCharacter onFavorite={handleFavorite} />
    </>
  );
}
