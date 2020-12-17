import React, { useState } from 'react';

import { SignInFacebook } from '../SignInFacebook/SignInFacebook';

import classNames from 'classnames';
import PropTypes from 'prop-types';


import './SignIn.scss';

export function SignIn({ onRigist, onPageCharacters }) {
  const [signInLogin, setSignInLogin] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  return (
    <form className="form">
      <div className="form__authorization">
        <div className="form__login">
          <input
            className="form__input"
            type="email"
            placeholder="Login"
            value={signInLogin}
            onChange={({ target }) => setSignInLogin(target.value)}
            required
          />
        </div>

        <div className="form__password">
          <input
            className="form__input"
            type="password"
            placeholder="Password"
            value={signInPassword}
            onChange={({ target }) => setSignInPassword(target.value)}
            required
          />
        </div>
      </div>

      <div className="form__buttons">
        <div className="form__button">
          <button className="form__sign-in" type="sumbit">Sign in</button>
        </div>
        
        <SignInFacebook onRigist={onRigist} onPageCharacters={onPageCharacters} />
      </div>
    </form>
  );
}

SignIn.propTypes = {
  onRigist: PropTypes.func.isRequired,
}