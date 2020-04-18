import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'src/styles/assets/images/logo.svg';

import HeaderWrapper from './Header';


const Header = () => {
  return (
    <HeaderWrapper>
      <h1>
        <Link to="/bienvenue"><img src={logo} alt="Logo de Notes" /></Link>
      </h1>
      <h2>Toutes vos idées, à portée de main</h2>
    </HeaderWrapper>
  );
};

export default Header;
