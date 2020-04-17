import React, { useEffect, useRef } from 'react';

import FieldWrapper from './Field';


const Field = ({
  type,
  nameIdFor,
  title,
  value,
  valueChanged,
  label,
  error,
  submitted,
}) => {
  const inputEl = useRef(null);
  const labelEl = useRef(null);

  useEffect(() => {
    if (value) {
      inputEl.current.classList.add('lower');
      labelEl.current.classList.add('higher', 'animation');
    }
    else {
      inputEl.current.classList.remove('lower');
      labelEl.current.classList.remove('higher', 'animation');
    }
  });

  const handleChange = (event) => {
    const { name, value: inputValue } = event.target;
    valueChanged(name, inputValue);
  };

  return (
    <FieldWrapper>
      <div>
        <input
          type={type}
          name={nameIdFor}
          id={nameIdFor}
          title={title}
          value={value}
          onChange={handleChange}
          ref={inputEl}
        />
        <label htmlFor={nameIdFor} ref={labelEl}>{label}</label>
      </div>
      {!error && !submitted && nameIdFor === 'signUpPassword' && (<p>Le mot de passe doit comprendre au moins 8 caractères dont un chiffre, une minuscule, une majuscule et un caractère spécial.</p>)}
      {!error && !submitted && nameIdFor === 'signUpConfirmPwd' && (<p>Les deux mots de passe doivent correspondre.</p>)}
      {error && nameIdFor === 'firstname' && (<p className="error">Veuillez saisir votre prénom.</p>)}
      {error && nameIdFor === 'signUpEmail' && (<p className="error">{value ? 'Veuillez saisir une adresse e-mail valide.' : 'Veuillez saisir une adresse e-mail.'}</p>)}
      {error && nameIdFor === 'signUpPassword' && (<p className="error">{value ? 'Veuillez saisir un mot de passe valide, à savoir de 8 charactères minimum, avec un chiffre, une minuscule, une majuscule et un caractère spécial.' : 'Veuillez saisir un mot de passe.'}</p>)}
      {error && nameIdFor === 'signUpConfirmPwd' && (<p className="error">{value ? 'Les mots de passe ne correspondent pas.' : 'Veuillez confirmer votre mot de passe.'}</p>)}
      {error && nameIdFor === 'signInEmail' && (<p className="error">{value ? 'Veuillez saisir une adresse e-mail valide.' : 'Veuillez saisir votre adresse e-mail.'}</p>)}
      {error && nameIdFor === 'signInPassword' && (<p className="error">Veuillez saisir votre mot de passe.</p>)}
    </FieldWrapper>
  );
};

export default Field;
