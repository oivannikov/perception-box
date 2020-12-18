import { useState } from 'react';

import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import { PageCharacters } from './components/Pages/PageCharacters/PageCharacters';
import { PageCurrentCharacter } from './components/Pages/PageCurrentCharacter/PageCurrentCharacter';
import { Modal } from './components/Modal/Modal';
import { SignIn } from './components/SignIn/SignIn';

import './App.scss';

function App() {
  const [isRegist, setIsRegist] = useState(true);
  const [isPage, setPageCharacters] = useState(false);
  const history = useHistory();

  if (isRegist) {
    history.push('/');
  }

  return (
    <div className="app">
    { isPage
        ? (  <Switch>
              <Route path="/" exact>
                <Redirect to="/characters/" />
              </Route>

              <Route path="/characters/" component={PageCharacters} exact />
              <Route path="/characters/:characterId" component={PageCurrentCharacter} />
            </Switch>
          )
        : isRegist && <Modal> <SignIn onRigist={setIsRegist} onPageCharacters={setPageCharacters} /></Modal>
    }
    </div>
  );
}

export default App;
