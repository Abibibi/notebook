import React, { useEffect, useRef } from 'react';

import FieldWrapper from './Field';


const Field = ({
  type,
  nameIdFor,
  title,
  value,
  changeValue,
  label
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
    changeValue(name, inputValue);
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
      {nameIdFor === 'signUpPassword' && <p>Le mot de passe doit comprendre au moins 8 caractères dont un chiffre, une minuscule, une majuscule et un caractère spécial.</p>}
      {nameIdFor === 'signUpConfirmPwd' && <p>Les deux mots de passe doivent correspondre.</p>}
    </FieldWrapper>
  );
};

export default Field;
