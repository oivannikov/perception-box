import { useState, useEffect } from 'react';

import FacebookLogin from 'react-facebook-login';

import { useDispatch } from 'react-redux';
import { setCharacters } from './redux/actions';

import { ListCharacter } from './components/ListCharacter/ListCharacter';
import { getCharacters } from './api/characters';
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

  return (
    <div className="app">
      {/* <Autocomplete /> */}
        <Autocomplete
          id="combo-box-demo"
          options={top100Films}
          getOptionLabel={(option) => option.title}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />

      <ListCharacter />

    </div>
  );
}

export default App;
