import { useState, useEffect } from 'react';

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { Loader } from '../../Loader/Loader';
import { ListCharacter } from '../../ListCharacter/ListCharacter';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import { getCharacters, getCharactersFromField } from '../../../api/characters';
import { setCharacters, setCharactersFromField, setUpdatedCharacters } from '../../../redux/actions';
import { charactersWithId, updateFavoritesStorage } from '../../Utils/Utils';
import { useDebounce } from '../../Hooks/debouncedSearch';

import './PageCharacters.scss';

export function PageCharacters() {
  const charactersFromField = useSelector(state => state.charactersFromField);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    setLoading(true);

    getCharacters()
      .then(result => {
        const characters = charactersWithId(result);

        dispatch(setCharacters(characters));
        setLoading(false);
      });
  }, [dispatch]);

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

      { isLoading ? <Loader /> : <ListCharacter onFavorite={handleFavorite} /> }
    </>
  );
}
