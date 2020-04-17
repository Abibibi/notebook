import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

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
  logged,
  registered,
  registerFail,
  signedIn,
  signInFail
}) => {
  const [isFormSignin, setIsFormSignin] = useState(false);
  const [buttonText, setButtonText] = useState('');

  const [errors, setErrors] = useState({
    signInEmail: false,
    signInPassword: false,
    firstname: false,
    signUpEmail: false,
    signUpPassword: false,
    signUpConfirmPwd: false,
  });

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

  useEffect(() => {
    setIsFormSignin(window.location.pathname === '/connexion');
    setButtonText(window.location.pathname === '/connexion' ? 'Se connecter' : 'S\'inscrire');
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // if user submits form again,
    // previous submission message
    // should not be displayed anymore initially
    Object.values(errors).map((error) => {
      setErrors(false);
    })

    // errors on sign up page
    if (!isFormSignin) {
      if (!firstname
        || (!signUpEmail || !signUpEmail.match(emailRegex))
        || (!signUpPassword || !signUpPassword.match(passwordRegex))
        || (!signUpConfirmPwd || signUpPassword !== signUpConfirmPwd)) {

        setErrors((err) => ({ ...err, firstname: !firstname }));
        setErrors((err) => ({ ...err, signUpEmail: !signUpEmail || !signUpEmail.match(emailRegex) }));
        setErrors((err) => ({ ...err, signUpPassword: !signUpPassword || !signUpPassword.match(passwordRegex) }));
        setErrors((err) => ({ ...err, signUpConfirmPwd: !signUpConfirmPwd || signUpPassword !== signUpConfirmPwd }));
        return;
      }
    }
    
    // errors on sign in page
    if (isFormSignin) {
      if ((!signInEmail || !signInEmail.match(emailRegex))
      || (!signInPassword)) {

        setErrors((err) => ({ ...err, signInEmail: !signInEmail || !signInEmail.match(emailRegex) }));
        setErrors((err) => ({ ...err, signInPassword: !signInPassword }));
        return;
      }
    }

    // if no error, emitting Ajax call to backend API
    formSubmitted()
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
          />
          <Field
            type="password"
            nameIdFor="signUpConfirmPwd"
            title="Veuillez confirmer votre mot de passe"
            label="Confirmation du mot de passe"
            value={signUpConfirmPwd}
            error={errors.signUpConfirmPwd}
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
      
      {!isFormSignin && (registered && !registerFail) && (<div className="response success">Inscription effectée</div>)}
      {!isFormSignin && (registerFail && !registered) && (<div className="response fail">Inscription invalide</div>)}
      {isFormSignin && (signedIn && !signInFail) && (<div className="response success">Connexion réussie</div>)}
      {isFormSignin && (signInFail && !signedIn) && (<div className="response fail">Connexion échouée</div>)}
      
      {logged && <Redirect to="/bienvenue" />}
    </FormWrapper>
  );
};

export default Form;
