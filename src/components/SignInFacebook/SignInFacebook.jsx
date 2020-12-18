import React from 'react';

import { useHistory } from 'react-router-dom';

import FacebookLogin from 'react-facebook-login';

import './SignInFacebook.scss';

export function SignInFacebook({ onRigist, onPageCharacters }) {
  const history = useHistory();

  function responseFacebook(response) {
    if (response.status !== 'unknown') {
      history.push('/');
      onPageCharacters(true);
    } else {
      onRigist(true);
    }
  }

  return (
    <>
      <FacebookLogin
         appId="203258351346646"
         autoLoad={false}
         fields="name,email"
         onClick={() => onRigist(false)}
         callback={(response) => responseFacebook(response)}
      />
    </>
  );
}