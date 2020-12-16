import { useState, useEffect } from 'react';

import FacebookLogin from 'react-facebook-login';

import { useDispatch, useSelector } from 'react-redux';
import { setCharacters, setCharactersFromField } from '../../../redux/actions';

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

  // Получаю данные сразу при регистрации
  useEffect(() => {
    getCharacters()
      .then(characters => dispatch(setCharacters(characters)));
  }, []);

 // Получаю данные когда ввожу в форму
  useEffect(() => {
    let cancel;

    const cancelation = (c) => {
      cancel = c;
    }

    if (debouncedSearchTerm) {
      getCharactersFromField(debouncedSearchTerm, cancelation)
        .then(characters => dispatch(setCharactersFromField(characters)));
    }

    return () => {
      cancel && cancel();
    }

    }, [debouncedSearchTerm]);


    function handleSearchTerm(e) {
      setSearchTerm(e.target.value);
    
      // Обработать ошибку чтобы при пустом поле не показывались предыдущие персонажи!!!!!!!!!!!!!!!!!!!!!!!!!!!
    }

  return (
    <>
      <Autocomplete
        className="app__autocomplete"
        options={charactersFromField || []}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => 
          <TextField
            {...params}
            className="app__field"
            label="Searching"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => handleSearchTerm(e)}
          /> }
      />

      <ListCharacter />
    </>
  );
}
