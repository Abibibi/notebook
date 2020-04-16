import React from 'react';

import { FieldContainer } from './Field'


const Field = ({
  type,
  nameIdFor,
  title,
  value,
  changeValue,
  label
 }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    changeValue(name, value) 
  }

  return (
    <FieldContainer>
      <input
        type={type}
        name={nameIdFor}
        id={nameIdFor}
        title={title}
        value={value}
        onChange={handleChange} 
      />
      <label htmlFor={nameIdFor}>{label}</label>
      {nameIdFor === 'signUpPassword' && <p>Le mot de passe doit faire au moins 8 caractères et comprendre au moins un chiffre, une minuscule, une majuscule et un caractère spécial.</p>}
    </FieldContainer>
  )
}

export default Field
