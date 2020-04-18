import React, { useState, useEffect } from 'react';

import logo from 'src/styles/assets/images/logo.svg';
import Form from 'src/containers/Form';
import {
  Container,
  Blocks,
  First,
  Second,
} from './Unlogged';


const Unlogged = () => {
  const [formTitle, setFormTitle] = useState('');

  useEffect(() => {
    setFormTitle(window.location.pathname === '/connexion' ? 'Connexion' : 'Inscription');
    document.title = (window.location.pathname === '/connexion' ? 'Connexion - Notes' : 'Inscription - Notes');
  });

  return (
    <Container>
      <Blocks>
        <First>
          <h1><img src={logo} alt="Logo de Notes" /></h1>
          <h2>Toutes vos idées, <span>à portée de main</span></h2>
        </First>
        <Second>
          <h1>{formTitle}</h1>
          <Form />
        </Second>
      </Blocks>
    </Container>
  );
};

export default Unlogged;
