import React from 'react';

import logo from 'src/styles/assets/images/logo.svg';

import HeaderWrapper from './Header';


const Header = () => {
  return (
    <HeaderWrapper>
      <h1>
        <img src={logo} alt="Logo de Notes" />
      </h1>
      <h2>Toutes vos idées, à portée de clic</h2>
    </HeaderWrapper>
  );
};

export default Header;
