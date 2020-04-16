import React from 'react';

import { Container, Blocks, First, Second } from './Unlogged';
import logo from 'src/styles/assets/images/logo.svg'

const Unlogged = () => {

  return (
    <Container>
      <Blocks>
        <First>
          <h1><img src={logo} /></h1>
          <h2>Toutes vos idées, <span>à portée de main</span></h2>
        </First>
        <Second>
  
        </Second>
      </Blocks>
    </Container>
  )
}

export default Unlogged;
