import React from 'react';
import '../../styles/header/header.scss';
import '../../styles/_global.scss';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="header flex flex-fd-r flex-ai-c ">
      <Link to="/">
        <div className="header__logoContainer">
          <h1>DAVE LASTNAME</h1>
        </div>
      </Link>
      <div className="header__buttonContainer flex flex-fd-r hide-for-mobile">
        <div className="header__buttonContainer__button">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="header__buttonContainer__button">
          <Link>SHOP</Link>
        </div>
        <div className="header__buttonContainer__button">
          <Link to="/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </div>
      </div>
      <HamburgerMenu />
    </header>
  );
};

export default Header;
