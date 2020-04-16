import React from 'react';

import { FormWrapper } from './Form'
import Field from 'src/containers/Field'


const Form = ({
  firstname,
  signUpEmail,
  signUpPassword,
  signUpConfirmPwd,
  signInEmail,
  signInPassword
}) => {
  return (
    <FormWrapper>
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
    </FormWrapper>
  )
}

export default Form;
