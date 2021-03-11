import React, { useState } from 'react';
import '../../styles/header/header.scss';
import '../../styles/global.scss';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  return (
    <header className="header__container flex flex-fd-r flex-ai-c ">
      <div className="header__logoContainer">
        <h1>DAVE LASTNAME</h1>
      </div>
      <div className="header__buttonContainer flex flex-fd-r hide-for-mobile">
        <div className="header__button">About</div>
        <div className="header__button">Contact</div>
      </div>
      <HamburgerMenu />
    </header>
  );
};

export default Header;
