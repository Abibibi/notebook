import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Field from 'src/containers/Field';
import FormWrapper from './Form';


const Form = ({
  firstname,
  signUpEmail,
  signUpPassword,
  signUpConfirmPwd,
  signInEmail,
  signInPassword
}) => {
  const [isFormSignin, setIsFormSignin] = useState(false);
  const [buttonText, setButtonText] = useState('');

  useEffect(() => {
    setIsFormSignin(window.location.pathname === '/connexion' ? true : false);
    setButtonText(window.location.pathname === '/connexion' ? 'Se connecter' : 'S\'inscrire');
  });

  return (
    <FormWrapper>
      {!isFormSignin
      && (
        <>
          <Field
            type="text"
            nameIdFor="firstname"
            title="Veuillez renseigner votre prénom"
            label="Prénom"
            value={firstname}
          />
          <Field
            type="email"
            nameIdFor="signUpEmail"
            title="Veuillez renseigner votre adresse e-mail"
            label="E-mail"
            value={signUpEmail}
          />
          <Field
            type="password"
            nameIdFor="signUpPassword"
            title="Veuillez renseigner un mot de passe"
            label="Mot de passe"
            value={signUpPassword}
          />
          <Field
            type="password"
            nameIdFor="signUpConfirmPwd"
            title="Veuillez confirmer votre mot de passe"
            label="Confirmation du mot de passe"
            value={signUpConfirmPwd}
          />
        </>
      )}
      {isFormSignin
      && (
        <>
          <Field
            type="email"
            nameIdFor="signInEmail"
            title="Veuillez renseigner votre adresse e-mail"
            label="E-mail"
            value={signInEmail}
          />
          <Field
            type="password"
            nameIdFor="signInPassword"
            title="Veuillez renseigner votre mot de passe"
            label="Mot de passe"
            value={signInPassword}
          />
        </>
      )}
      <button>{buttonText}</button>
      {!isFormSignin && <Link to="/connexion">Déjà inscrit-e ? Connectez-vous</Link>}
      {isFormSignin && <Link to="/inscription">Pas encore membre ? Inscrivez-vous</Link>}
    </FormWrapper>
  )
}

export default Form;
