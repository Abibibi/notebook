import React from 'react';

import {
  Container,
  Blocks,
  First,
  Second
} from './Unlogged';
import logo from 'src/styles/assets/images/logo.svg'
import Field from 'src/containers/Field'

const Unlogged = ({
  firstname,
  signUpEmail,
  signUpPassword,
  signUpConfirmPwd,
  signInEmail,
  signInPassword
}) => {

  return (
    <Container>
      <Blocks>
        <First>
          <h1><img src={logo} /></h1>
          <h2>Toutes vos idées, <span>à portée de clic</span></h2>
        </First>
        <Second>
          <h1>Inscription</h1>
          <form>
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
          </form>
        </Second>
      </Blocks>
    </Container>
  )
}

export default Unlogged;
