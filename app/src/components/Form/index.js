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
  signInPassword,
  formSubmitted,
}) => {
  const [isFormSignin, setIsFormSignin] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const [submission, setSubmission] = useState(false);

  const [errors, setErrors] = useState({
    signInEmail: false,
    signInPassword: false,
    firstname: false,
    signUpEmail: false,
    signUpPassword: false,
    signUpConfirmPwd: false,
  });

  useEffect(() => {
    setIsFormSignin(window.location.pathname === '/connexion');
    setButtonText(window.location.pathname === '/connexion' ? 'Se connecter' : 'S\'inscrire');
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // if user submits form again,
    // previous submission message
    // should not be displayed anymore initially
    setSubmission(true);

    setErrors((err) => ({ ...err, firstname: !firstname && !isFormSignin }));
    setErrors((err) => ({ ...err, signUpEmail: !isFormSignin && (!signUpEmail || !signUpEmail.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) }));
    setErrors((err) => ({ ...err, signUpPassword: !isFormSignin && (!signUpPassword || !signUpPassword.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) }));
    setErrors((err) => ({ ...err, signUpConfirmPwd: !isFormSignin && (!signUpConfirmPwd || signUpPassword !== signUpConfirmPwd) }));
    setErrors((err) => ({ ...err, signInEmail: isFormSignin && (!signInEmail || !signInEmail.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) }));
    setErrors((err) => ({ ...err, signInPassword: isFormSignin && !signInPassword }));

    formSubmitted();
  };

  return (
    <FormWrapper
      onSubmit={handleSubmit}
    >
      {!isFormSignin
      && (
        <>
          <Field
            type="text"
            nameIdFor="firstname"
            title="Veuillez renseigner votre prénom"
            label="Prénom"
            value={firstname}
            error={errors.firstname}
          />
          <Field
            type="email"
            nameIdFor="signUpEmail"
            title="Veuillez renseigner votre adresse e-mail"
            label="E-mail"
            value={signUpEmail}
            error={errors.signUpEmail}
          />
          <Field
            type="password"
            nameIdFor="signUpPassword"
            title="Veuillez renseigner un mot de passe"
            label="Mot de passe"
            value={signUpPassword}
            error={errors.signUpPassword}
            submission={submission}
          />
          <Field
            type="password"
            nameIdFor="signUpConfirmPwd"
            title="Veuillez confirmer votre mot de passe"
            label="Confirmation du mot de passe"
            value={signUpConfirmPwd}
            error={errors.signUpConfirmPwd}
            submission={submission}
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
            error={errors.signInEmail}
          />
          <Field
            type="password"
            nameIdFor="signInPassword"
            title="Veuillez renseigner votre mot de passe"
            label="Mot de passe"
            value={signInPassword}
            error={errors.signInPassword}
          />
        </>
      )}
      <button type="submit">{buttonText}</button>
      {!isFormSignin && <Link to="/connexion">Déjà inscrit-e ? Connectez-vous</Link>}
      {isFormSignin && <Link to="/inscription">Pas encore membre ? Inscrivez-vous</Link>}
    </FormWrapper>
  );
};

export default Form;
