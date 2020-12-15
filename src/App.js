import { useState, useEffect } from 'react';

import FacebookLogin from 'react-facebook-login';

import { useDispatch } from 'react-redux';
import { setCharacters } from './redux/actions';

import { useDebounce } from './components/Hooks/debouncedSearch';
import { ListCharacter } from './components/ListCharacter/ListCharacter';
import { getCharacters, getCharactersFromField } from './api/characters';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';


import './App.scss';
// import { Autocomplete } from './components/Autocomplete/Autocomplete';

function App() {
  // const [characters, setCharacters] = useState([]);
  
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
    { title: 'The Lord of the Rings: The Return of the King', year: 2003 },
    { title: 'The Good, the Bad and the Ugly', year: 1966 },
    { title: 'Fight Club', year: 1999 }
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    getCharacters()
      .then(characters => dispatch(setCharacters(characters)));
  }, []);

   // Search term
   const [searchTerm, setSearchTerm] = useState('');
  //  const [results, setResults] = useState([]);
  //  const [isSearching, setIsSearching] = useState(false);
   const debouncedSearchTerm = useDebounce(searchTerm, 500);
   

  //  Effect for API call 
  useEffect(() => {
    if (debouncedSearchTerm) {
      getCharactersFromField()
        .then(characters => console.log(characters));
    }

    },[debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  console.log(searchTerm);

  return (
    <div className="app">
      <Autocomplete
        className="app__autocomplete"
        options={top100Films}
        getOptionLabel={(option) => option.title}
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

      <ListCharacter />

    </div>
  );
}

export default App;
