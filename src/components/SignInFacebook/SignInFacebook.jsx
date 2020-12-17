import React from 'react';

import FacebookLogin from 'react-facebook-login';

import './SignInFacebook.scss';

export function SignInFacebook({ onRigist, onPageCharacters }) {

  function responseFacebook(response) {
    if (response.status !== 'unknown') {
      onPageCharacters(true);
    } else {
      onRigist(true);
    }
  }

  return (
    <>
      <FacebookLogin
         appId="203258351346646"
         autoLoad={true}
         fields="name,email"
         onClick={() => onRigist(false)}
         callback={(response) => responseFacebook(response)}
      />
    </>
  );
}