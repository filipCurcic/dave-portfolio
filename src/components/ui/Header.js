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
          <h1>DAVID CHAPMAN</h1>
        </div>
      </Link>
      <div className="header__buttonContainer flex flex-fd-r hide-for-mobile">
        <div className="header__buttonContainer__button">
          <Link to="/contact">Contact</Link>
        </div>
        {/* <div className="header__buttonContainer__button">
          <Link to="/login">LOGIN</Link>
        </div> */}
        {/* <div className="header__buttonContainer__button">
          <Link to="/register">REGISTER</Link>
        </div> */}
        <div className="header__buttonContainer__button">
          <Link to="/shop">SHOP</Link>
        </div>
        <div className="header__buttonContainer__button">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/davidchphoto/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <HamburgerMenu />
    </header>
  );
};

export default Header;
